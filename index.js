/**
 * NOTE: This is heavily based on `git branch` output.
 */

const execSync = require('child_process').execSync

let output = execSync('git branch').toString('utf8')

// get array of branches
let branches = output.split('\n').filter(branch => branch !== '')

// trim whitespace
branches = branches.map(branch => branch.trim())

// filter out the leading '* ' on the current branch
let currentBranch = branches.find(branch => branch[0] === '*')
let currentBranchIdx = branches.indexOf(currentBranch)
branches[currentBranchIdx] = currentBranch.slice(2)

// filter out master branch
branches.splice(branches.indexOf('master'), 1)

// merge master into each branch
branches.forEach(branch => {
	execSync(`git checkout ${branch}`)
	execSync(`git merge master`)
})
