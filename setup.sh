echo "=== ADD PS-admin remote ==="
git remote add psadmin http://gitlab.paradise-soft.com.tw/frontend/ps-admin.git
echo "=== Fetch PS-admin ==="
git fetch psadmin
echo "=== Create a brunch for PS-admin ==="
git checkout -b psadmin psadmin/master
echo "=== Merge it! ==="
git checkout master && git merge psadmin
echo "=== Push to Origin ==="
git push -u origin
echo "=== Happy Develop Admin ヽ(・×・´)ゞ==="