# aws-static-site
Static website hosted on AWS S3 + CloudFront

🔧 AWS Static Website Deployment Summary

1. Purchased a Domain  
   Registered the custom domain `khalidhashim.com` via Route 53 for $15/year.

2. Set Up S3 for Static Website Hosting  
   - Created an S3 bucket named `khalidhashim.com` (matching the domain name).  
   - Enabled public access by configuring the bucket policy.  
   - Uploaded website files (`HTML`, `CSS`, and `JS`).  
   - Enabled static website hosting in the bucket settings.

3. Issued SSL Certificate via ACM  
   - Requested a certificate in AWS Certificate Manager for `khalidhashim.com`.  
   - Verified domain ownership using a DNS validation record added in Route 53.

4. Deployed CloudFront Distribution  
   - Created a CloudFront distribution to serve the S3-hosted website globally with improved performance.  
   - Configured the distribution to use the custom domain `khalidhashim.com`.  
   - Attached the ACM SSL certificate to enable HTTPS.

5. Updated DNS in Route 53  
   - Created a new A (alias) record for `khalidhashim.com` pointing to the CloudFront distribution domain.

⚠️ Challenges Faced

Initially, I incorrectly pointed the Route 53 record to the wrong S3 region’s website endpoint, which caused a 
400 error (`IncorrectEndpoint`). After troubleshooting, I identified and corrected the S3 bucket region and updated the DNS record accordingly. 
This resolved the issue and the site loaded successfully.

✅ Outcome

Successfully deployed a secure, serverless static website with a custom domain, HTTPS, and global CDN distribution using the following AWS services:

- Amazon S3
- Route 53
- AWS Certificate Manager (ACM)
- CloudFront

