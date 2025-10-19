# aws-static-site
Static website hosted on AWS S3 + CloudFront
🔗 [Live Website](https://khalidhashim.com)

🔗 Live Website

Static website hosted on AWS S3 + CloudFront with API integration for visitor logging

AWS Static Website Deployment Summary
✅ Domain Registration

Purchased a domain: Registered the custom domain khalidhashim.com via Route 53 for $15/year.

📦 Set Up S3 for Static Website Hosting

Created an S3 bucket named khalidhashim.com (matching the domain name).

Enabled public access and configured the bucket policy for static content delivery.

Uploaded HTML, CSS, and JavaScript files.

Enabled static website hosting in the bucket settings.

🔐 SSL Certificate via ACM

Requested an SSL certificate in AWS Certificate Manager (ACM) for khalidhashim.com.

Verified domain ownership using DNS validation through Route 53.

🌍 Deployed CloudFront Distribution

Created a CloudFront distribution to serve content globally with low latency and high availability.

Configured it to use the custom domain khalidhashim.com.

Attached the ACM SSL certificate to enable HTTPS.

Configured origin as the S3 bucket website endpoint.

🌐 DNS Configuration in Route 53

Created an A (alias) record in Route 53 pointing to the CloudFront distribution.

Ensured the record matches khalidhashim.com.

🛠️ API + Lambda + DynamoDB for Visitor Logging (NEW)

Created a REST API using Amazon API Gateway to capture visitor data.

Integrated API with a Lambda function (Node.js/Python) to process and log each visit.

The Lambda function:

Captures details like IP address, timestamp, and user-agent.

Stores the data in a DynamoDB table designed for visitor logs.

Frontend (JavaScript) sends a fetch request to the API on page load or user interaction.

⚠️ Challenges Faced

Initially pointed the Route 53 DNS to the wrong S3 region's website endpoint, resulting in a 400 error (IncorrectEndpoint).

Resolved by correcting the S3 bucket region and updating the DNS record.

✅ Outcome

Successfully deployed a secure, scalable, and serverless static website with:

Custom domain via Route 53

Global CDN via CloudFront

HTTPS encryption via ACM

Static hosting via S3

Visitor logging via API Gateway + Lambda + DynamoDB
