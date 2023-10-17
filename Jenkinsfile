pipeline {
    agent any

    tools { nodejs "node"}

    stages {
        stage('Cypress parallel Test Suite') {
            parallel {
                stage('Slave Node1') {
                    agent{
                        lable "remote_node1"
                    }
                    steps {
                        git url:'https://github.com/markogavrilovic032/cypress-automation-framework.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run trrrigerAllTests-autostore-dashboard'
                    }
                }
                stage('Slave Node2') {
                    agent{
                        lable "remote_node2"
                    }
                    steps {
                        git url:'https://github.com/markogavrilovic032/cypress-automation-framework.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run trrrigerAllTests-autostore-dashboard'
                    }
                }
            }
        }
    }
}