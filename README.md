# playwright-tests-ts
для запуска тестов через Docker
docker run playwright-test-ui

Запуск тестов с разными режимами:
"npx playwright test --headed",  // Запуск в видимом браузере
"npx playwright test --debug",   // Режим отладки
"npx playwright test --ui"       // Интерактивный UI-режим
npx playwright show-trace trace.zip // просомтр записанного трейса

Команда для Godgen
npx playwright codegen https://www.saucedemo.com/v1/