@echo off
chcp 65001 > nul
title Enviando para o GitHub - Cuidados Paliativos
echo ===================================================================
echo   Enviando arquivos descompactados para o GitHub (Embaeca)
echo ===================================================================
echo.

cd /d "%~dp0"
git add -A
git commit -m "Atualizacao de logos (UPA Norte e Imodernizar), novo favicon e textos justificados"
git push origin main

echo.
if %ERRORLEVEL% equ 0 (
    echo ===================================================================
    echo   [SUCESSO] Site publicado no GitHub com sucesso!
    echo ===================================================================
    echo.
    echo Acesse: https://github.com/Embaeca/cuidados-paliativos-upa-norte
) else (
    echo [INFO] Se abriu uma janela pedindo autorizacao, faca o login.
)
echo.
pause
