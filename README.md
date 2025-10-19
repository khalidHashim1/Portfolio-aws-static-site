🌐 AWS Static Website Deployment – khalidhashim.com

✅ Domain Registration
- Registered custom domain `khalidhashim.com` via Route 53 ($15/year).

📁 Static Website Hosting (S3)
- Created an S3 bucket named `khalidhashim.com`.
- Enabled public access and static website hosting.
- Uploaded website files (HTML, CSS, JS).

🔐 SSL & HTTPS (ACM)
- Issued an SSL certificate via AWS Certificate Manager.
- Verified domain ownership using DNS validation in Route 53.

🌍 Global CDN (CloudFront)
- Created a CloudFront distribution pointing to the S3 bucket.
- Enabled HTTPS using the ACM certificate.
- Configured custom domain (`khalidhashim.com`) as alternate domain name.

🌐 DNS Configuration
- Added an A (alias) record in Route 53 pointing to the CloudFront distribution.

📊 Visitor Logging (API Gateway + Lambda + DynamoDB)
- Created a REST API using API Gateway to capture visitor data.
- Integrated with a Lambda function to log IP, timestamp, and user-agent.
- Stored logs in a DynamoDB table.

⚠️ Challenges Faced
- Initially pointed Route 53 to the wrong S3 region, causing a 400 error.
- Resolved by correcting the region and updating the DNS record.
- Faced issues with enabling CORS in API Gateway; resolved by updating headers and method responses.
- Encountered problems with the Lambda function in the original runtime; switching to Python resolved them.

✅ Outcome
Successfully deployed a secure, serverless static website with:
- Custom domain + HTTPS
- Global CDN via CloudFront
- Visitor logging using API Gateway, Lambda, and DynamoDB
