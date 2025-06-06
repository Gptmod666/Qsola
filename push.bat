@echo off
cd /d "C:\Users\ayads\Desktop\Qsola"

echo ➕ Ajout des modifications...
git add .

echo 📝 Commit...
git commit -m "update"

echo ⬆️ Push vers GitHub...
git push

echo ✅ Projet mis à jour.
pause
