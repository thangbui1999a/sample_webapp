pipeline {
    agent any 
    stages {
        stage('run app') {
            steps {
                sh 'npm install'
                sh 'npm run start' 
            }
        }

        stage('test app') {
            steps {
                sh 'krcli --browser "chrome" --extension "/home/bthang/Desktop/src" -t "./test/webapp.html" --driver "/home/bthang/Downloads/chromedriver_linux64/chromedriver" --task-name "from jenkins256"' 
            }
        }


    }
}