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
    stage('Deploy') {
          steps {
            sh './node_modules/.bin/pm2 start ecosystem.config.js'
          }
        }
  }
}