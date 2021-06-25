pipeline {
    agent any 
    stages {

        stage('install') {
            steps {
                sh 'npm install'
            }
        }

        stage('test app') {

        	parallel {

                stage('run server') {
                    steps {
                        sh 'npm run start'
                    }
                }

                stage('test') {
                   
                    steps {
                            sh 'krcli --browser "chrome" --extension "/home/bthang/Desktop/src" -t "./test/webapp.html" --driver "/home/bthang/Downloads/chromedriver_linux64/chromedriver" --task-name "from jenkins256"' 
                    }
                }

    	  


    	}
           
    }

  


    }
}