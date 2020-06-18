pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 2020:2020' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}