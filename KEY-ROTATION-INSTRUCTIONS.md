# 🔑 CLERK API KEY ROTATION - MANUAL PROCESS

**CRITICAL SECURITY INCIDENT**: Exposed Clerk API keys must be revoked immediately.

## 🚨 IMMEDIATE STEPS (DO NOW)

### Step 1: Access Clerk Dashboard
1. Go to https://dashboard.clerk.dev/
2. Log in to your Clerk account
3. Navigate to your project/application

### Step 2: Revoke Exposed Keys
**THESE KEYS ARE COMPROMISED AND MUST BE REVOKED:**
- **Secret Key**: `sk_test_QfglXrPYTBSZDifmasKr9FhwODdZI8YWMtEsh9fmAf`
- **Publishable Key**: `pk_test_ZXZvbHZpbmctdGhydXNoLTI3LmNsZXJrLmFjY291bnRzLmRldiQ`

**Navigation in Clerk Dashboard:**
1. Go to "API Keys" section (usually in left sidebar)
2. Find the exposed keys in the list
3. Click "Revoke" or "Delete" for each key
4. Confirm revocation when prompted

### Step 3: Generate New API Keys
1. In the same "API Keys" section
2. Click "Create Key" or "Generate New Key"
3. **Select Test Environment** (since exposed keys were test keys)
4. Copy the new keys immediately:
   - New Publishable Key (starts with `pk_test_`)
   - New Secret Key (starts with `sk_test_`)

### Step 4: Update Local Environment
1. Create a new `.env.local` file in `apps/nexus/`
2. Use this template:

```env
# Clerk Authentication Keys
# Get these from https://dashboard.clerk.dev/
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_NEW_PUBLISHABLE_KEY_HERE
CLERK_SECRET_KEY=YOUR_NEW_SECRET_KEY_HERE

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

3. Replace `YOUR_NEW_PUBLISHABLE_KEY_HERE` with your new publishable key
4. Replace `YOUR_NEW_SECRET_KEY_HERE` with your new secret key
5. Save the file

### Step 5: Test the Application
```bash
cd /Users/derry/Sites/x/nxs/nxs
npx nx dev nexus
```

Verify:
- Application starts without errors
- Authentication flow works
- You can sign in and access dashboard

## 🧹 CLEANUP EXPOSED CREDENTIALS

All exposed credentials have been removed from:
- ✅ Working directory (`.env.local` removed from tracking)
- ✅ Documentation files (will be cleaned up)
- ❌ **Git history** (STILL CONTAINS EXPOSED KEYS)

### Git History Cleanup (Advanced)
**WARNING**: This rewrites git history and is destructive. Only do this if you understand the implications.

```bash
# Option 1: Using BFG Repo-Cleaner (recommended)
# Install BFG: brew install bfg
cd /Users/derry/Sites/x/nxs/nxs
bfg --replace-text secrets.txt
git reflog expire --expire=now --all && git gc --prune=now --aggressive

# Option 2: Using git filter-repo (if available)
# pip install git-filter-repo
git filter-repo --path apps/nexus/.env.local --invert-paths

# Option 3: Manual history rewrite (complex)
git filter-branch --force --index-filter \
  'git rm --cached --ignore-unmatch apps/nexus/.env.local' \
  --prune-empty --tag-name-filter cat -- --all
```

For `secrets.txt` file used with BFG, create:
```
sk_test_QfglXrPYTBSZDifmasKr9FhwODdZI8YWMtEsh9fmAf==>REDACTED_SECRET_KEY
pk_test_ZXZvbHZpbmctdGhydXNoLTI3LmNsZXJrLmFjY291bnRzLmRldiQ==>REDACTED_PUBLISHABLE_KEY
```

## 📋 POST-ROTATION CHECKLIST

After completing key rotation:

### Immediate Verification
- [ ] Old keys revoked in Clerk Dashboard
- [ ] New keys generated and copied
- [ ] Local `.env.local` updated with new keys
- [ ] Application starts and authentication works
- [ ] Can sign in and access dashboard successfully

### Security Hardening
- [ ] Verified `.env.local` is in `.gitignore`
- [ ] No sensitive data in current working directory
- [ ] Git history cleaned (if possible/necessary)
- [ ] Team members notified of new keys (if applicable)

### Documentation Updates
- [ ] All documentation updated to remove exposed keys
- [ ] Security incident report updated with resolution
- [ ] Blog post updated with secure examples

## 🎯 PREVENTION MEASURES

To prevent future incidents:

### Immediate Implementation
- [ ] Pre-commit hooks for secret detection
- [ ] Automated secret scanning in CI/CD
- [ ] Regular security audits and key rotation
- [ ] Team security training and awareness

### Long-term Security
- [ ] Use secret management systems (AWS Secrets Manager, HashiCorp Vault)
- [ ] Implement least privilege access for API keys
- [ ] Regular penetration testing and security assessments
- [ ] Formal security review process for all code changes

## ⚠️ IMPORTANT NOTES

### Why Manual Rotation is Required
- Clerk doesn't provide a public CLI for key management
- Keys must be rotated through the web dashboard
- This ensures proper access control and audit trails

### Test vs Production Keys
- The exposed keys were **test environment keys** (`sk_test_` prefix)
- Production keys have different prefixes (`sk_live_`)
- Still requires immediate action for security best practices

### Communication
- **DO NOT** share the new keys via email, Slack, or other channels
- **DO NOT** commit the new keys to git
- **DO** ensure only authorized team members have access

---

## 🔥 TIMELINE

- **T+0 minutes**: Keys discovered and incident response initiated ✅
- **T+15 minutes**: Keys should be revoked in Clerk Dashboard ❌ **REQUIRED NOW**
- **T+30 minutes**: New keys generated and local environment updated
- **T+60 minutes**: Application tested and working with new keys  
- **T+2 hours**: Git history cleaned (if necessary)
- **T+24 hours**: Full security audit and documentation update completed

**CURRENT STATUS**: Manual key rotation required immediately at https://dashboard.clerk.dev/

---

*This document will be updated as the incident is resolved.*  
*Created by: CISO - NXS Dashboard Security Team*