@echo off
cd /d "%~dp0"

echo.
echo === Force Pull depuis GitHub: origin/main ===
echo.

:: Vérifie que Git est installé
where git >nul 2>&1 || (
    echo Git n'est pas installé. Installe-le d'abord.
    pause
    exit /b
)

:: S'assure que tu es sur la bonne branche
git checkout main

:: Récupère les dernières infos depuis GitHub
git fetch origin

:: Écrase tous les fichiers locaux avec ceux de GitHub
git reset --hard origin/main

echo.
echo === Terminé : tous les fichiers locaux ont été écrasés avec ceux de GitHub ===
pause
