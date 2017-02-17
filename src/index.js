#!/usr/bin/env node

const execSync = require('child_process').execSync
const spawnSync = require('child_process').spawnSync

/**
 * NOTE: This is heavily based on `git branch` output.
 */

let output = execSync('git branch').toString('utf8')

// get array of branches
let branches = output.split('\n').filter(branch => branch !== '')

// trim whitespace
branches = branches.map(branch => branch.trim())

// filter out the leading '* ' on the current branch
let currentBranch = branches.find(branch => branch[0] === '*')
let currentBranchIdx = branches.indexOf(currentBranch)
currentBranch = currentBranch.slice(2)
branches[currentBranchIdx] = currentBranch


// filter out master branch
branches.splice(branches.indexOf('master'), 1)


// merge master into each branch
branches.forEach(branch => {
	spawnSync('git', ['checkout', branch], { stdio: 'inherit' })
	let mergeStatus = spawnSync('git', ['merge', 'master'], { stdio: 'inherit' })

	// exit if there is a merge error
	if (mergeStatus.stderr.toString('utf8').length > 0) {
		process.exit()
	}
})

spawnSync(`git`, [`checkout`, currentBranch], { stdio: 'inherit' })
