# Nginx 

### nginx.conf
The main config file. Cause there architecture, worker ps-s, logging, gzip and includes, hiding the nginx version, ip filter, 

### sites/user.conf
Server blocks. Main site, public, soft limits, caching

### sites/admin.conf
Only ip access, hard RPS, cache is off, ip filter, 

### snippets/cache.conf
Reusable, incuding configs

### snippets/compression.conf
gzip, brotli, zstd(opt)

