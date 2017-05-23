projectId = "buurkracht-mobile-yarn-test"

pipeline {
  agent {
    dockerfile {
      filename "dockerfiles/ci/Dockerfile"
      additionalBuildArgs support.ciDockerFileBuildArgs()
      args support.ciDockerFileRunArgs(projectId)
    }
  }

  options {
    ansiColor("xterm")
  }

  stages {
    stage("Setup") {
      steps {
        sh "rm -rf node_modules && cp -R /tmp/node_modules ."
      }
    }

    stage("Tests") {
      steps {
        sh "bin/ci"
        junit "reports/*.xml"
      }
    }
  }
}

