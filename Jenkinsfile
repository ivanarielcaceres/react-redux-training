#!/usr/bin/env groovy

pipeline {
    agent {
        docker {
            image 'node:10-alpine'
            args '-u root -p 3000:3000'
        }
    }
    environment { 
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'node node_modules/puppeteer/install.js'
            }
        }
        stage('Test') {
            steps {
                sh 'chmod +x jenkins/scripts/test.sh'
                sh 'jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') { 
            steps {
                sh 'chmod +x jenkins/scripts/deliver.sh'
                sh 'jenkins/scripts/deliver.sh' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh 'chmod +x jenkins/scripts/kill.sh'
                sh 'jenkins/scripts/kill.sh' 
            }
        }
    }
}
