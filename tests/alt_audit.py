import re, glob, os

files = sorted(glob.glob('/app/frontend/build/**/index.html', recursive=True))
print("files:", len(files))
issues = []
for f in files:
    html = open(f, encoding='utf-8').read()
    for tag in re.findall(r'<img\b[^>]*>', html):
        m = re.search(r'alt="([^"]*)"', tag)
        src = re.search(r'src="([^"]*)"', tag)
        srcv = src.group(1) if src else '?'
        if not m:
            issues.append((f, srcv, 'MISSING ALT'))
        elif len(m.group(1).strip()) <= 5:
            issues.append((f, srcv, f'SHORT ALT: {m.group(1)!r}'))
        else:
            print(f"OK {os.path.relpath(f,'/app/frontend/build')} | {srcv} | alt={m.group(1)[:80]!r}")
print("\nISSUES:", len(issues))
for i in issues:
    print(i)
