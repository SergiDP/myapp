pipeline {
  agent any

  tools {nodejs "node"}

  stages {

    stage('Cloning Git') {
      steps {
        git 'https://github.com/SergiDP/myapp'
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Start') {
        steps {
            sh 'pm2 start ecosystem.config.js'
        }
    }
  }
}