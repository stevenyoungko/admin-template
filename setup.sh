echo '=== Add Remote' $1 $2;
git remote add $1 $2
echo '=== Check Remote';
git remote -v
echo "=== Create a brunch for New Repo ==="
git checkout master
echo "=== Push to Origin ==="
git push -u $1 master
echo "=== Admin Setup Success ヽ(・×・´)ゞ==="
git remote remove $1