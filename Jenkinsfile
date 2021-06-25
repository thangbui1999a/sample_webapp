pipeline {
    agent any 
    stages {

        stage('install') {
            steps {
                sh 'npm install'
                sh 'node run_server.js'
            }
        }

        stage('test') {
                   
            steps {
                    sh 'xvfb-run krcli --browser "chrome" --extension "/home/bthang/Desktop/src" -t "./test/webapp.html" --driver "/home/bthang/Downloads/chromedriver_linux64/chromedriver" --task-name "from jenkins256" --output-path "/home/bthang/.config/krcli/jenkins_output" ' 
                    sh 'zip -r ./jenkins_output.zip /home/bthang/.config/krcli/jenkins_output'
            }
            post {
                always {
                    archiveArtifacts './jenkins_output.zip'
                }
            }
        }
  


    }
}