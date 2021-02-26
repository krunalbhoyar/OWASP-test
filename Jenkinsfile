pipeline {

    agent any
    
     stages {
      stage ('Source composition analysis') {
        steps {
          sh 'rm owasp* || true'
          sh 'wget "https://raw.githubusercontent.com/krunalbhoyar/OWASP-test/master/owasp-dependency-check.sh" '
          sh 'chmod +x owasp-dependency-check.sh'
          
          sh 'bash owasp-dependency-check.sh'
          sh 'cat /var/lib/jenkins/workspace/OWASP-test/odc-reports/dependency-check-report.xml'
         
            
        }
    }
          
      }
}
