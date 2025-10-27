#!groovy
@Library('waluigi@release/7') _

beehiveFlowBuild(
  container: [
    resourceRequestMemory: '4Gi',
    resourceLimitCpu: '4',
    resourceLimitMemory: '4Gi'
  ],
  customSteps: {
    stage("update storybook") {
      def status = beehiveFlowStatus()
      if (status.branchState == 'releaseReady' && status.isLatest) {
        tinyGit.withGitHubSSHCredentials {
          exec('yarn deploy-storybook')
        }
      } else {
        echo "Skipping as is not latest release"
      }
    }
  }
)
