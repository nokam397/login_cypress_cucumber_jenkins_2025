pipeline {
    agent {
        docker {
            image 'cypress/browsers:latest'
            args '--entrypoint='
        }
    }

    stages {
        stage('Installation') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
    }

    post {
        always {
            sh 'tools/generate_html_cucumber_report.sh'
            archiveArtifacts artifacts: 'cypress/screenshots/**, reports/**', allowEmptyArchive: true
        }
    }
}
