#!groovy
@Library('waluigi@v6.0.0-rc') _

beehiveFlowBuild(
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
