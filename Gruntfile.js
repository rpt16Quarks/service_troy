const aws = require('./aws-keys.json')
//had to create var to store key and Id in or would get error that Amazon didn't recoginize the key
const keyId = aws.AWSAccessKeyId;
const secKey = aws.AWSSecretKey;

module.exports = function (grunt) {

  grunt.initConfig({
    aws: grunt.file.readJSON( 'aws-keys.json' ),
    aws_s3: {
        options: {
            accessKeyId: keyId,
            secretAccessKey: secKey,
            region: 'us-west-2',
            bucket: 'des-bundle'
        },
        bundle: {
            files: [
                {
                    expand: true,
                    cwd: 'public',
                    src: 'bundle.js',
                    dest: 'fec_bundle/',
                    action: 'upload'
                }
            ]
        }
    }

  });
  grunt.registerTask( 'aws_s3:dist')
  grunt.loadNpmTasks('grunt-aws-s3');
}

