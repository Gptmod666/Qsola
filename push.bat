@echo off
echo.
echo 🔄 Ajout des modifications...
git add .

echo.
echo ✅ Commit...
git commit -m "force update"

echo.
echo ⛔ Push forcé vers GitHub...
git push origin main --force

echo.
echo 🚀 Push terminé (force).
pause