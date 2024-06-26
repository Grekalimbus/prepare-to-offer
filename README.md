## Удаление секретов из коммитов (перезаписывает историю комитов)

git filter-branch --force --index-filter "git rm --cached --ignore-unmatch .env" --prune-empty --tag-name-filter cat -- --all

## Объеденить комиты в один

git rebase -i HEAD~3(цифра - число комитов)
pick abc123 Commit message 1
pick def456 Commit message 2

pick заменить на squash
