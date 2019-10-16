echo '=== Check Remote ==='
has_remote=`git remote | grep psadmin`
if [[ -n "$has_remote" ]];
then
  echo 'Has Ps-Admin Remote!'
  git fetch psadmin
  (git checkout -b psadmin psadmin/master || git checkout psadmin) && git pull
  (git checkout -b update-admin || git checkout update-admin) && git merge psadmin
  echo 'Fix Conflict and Save'
else 
  echo 'Reset Remote'
  git remote add psadmin http://gitlab.paradise-soft.com.tw/frontend/ps-admin.git
  echo '=== Switch branch update-admin ==='
  git checkout -b update-admin
  echo '=== Fetch Ps-admin/Master ==='
  git fetch psadmin
  git checkout -b psadmin psadmin/master
  echo '=== Update！！！ ==='
  git checkout update-admin && git merge psadmin
  echo 'Fix Conflict and Save'
fi