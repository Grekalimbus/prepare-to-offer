## Удаление секретов из коммитов (перезаписывает историю комитов)

git filter-branch --force --index-filter "git rm --cached --ignore-unmatch .env" --prune-empty --tag-name-filter cat -- --all

## Слить комиты в один

git rebase -i HEAD~2 (цифра кол-во комитов)
pick заменить на squash
