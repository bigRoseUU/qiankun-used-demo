
# 子应用根目录

# 要部署的文件夹名
if [[ $1 != '' ]]
then
  packagesName=$1
else
  echo 请填写要运行的子应用名称，如：yarn serve packages/app-center
  exit 64
fi

# 运行环境
if [[ $2 != '' ]]
then
  serve='serve:'$2
else
  serve='serve'
fi

cd ${packagesName}

yarn ${serve}
