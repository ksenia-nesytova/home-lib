const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname);
const folders = fs.readdirSync(baseDir).filter((file) => 
    fs.statSync(path.join(baseDir, file)).isDirectory()
); // Находим папки с иконками

const basePath = 'assets/icons';

const formatIconName = (name) => {
    // Убираем - символ из ключа в файле с путями к иконкам
    return name.replace(/(?:^|\s|-)\S/g, (match) => match.toUpperCase()).replace(/-/g, '');
};

// Проходимся по всем подпапкам
folders.forEach((folder) => {
    const folderPath = path.join(baseDir, folder);
    const tsFilePath = path.join(baseDir, `${folder}.ts`);

// Проверяем существует ли папка
    if (!fs.existsSync(folderPath)) {
        console.warn(`Skipping: ${folderPath} (Folder does not exist)`);
        return;
    }

    const files = fs
        .readdirSync(folderPath)
        .filter((file) => file.endsWith('.svg')) // Пропускаем не-svg файлы
        .map((file) => ({
            originalName: path.basename(file, '.svg'), // Оставляем оригинальное название файла
            formattedName: formatIconName(path.basename(file, '.svg')), // Создаем название без спец символов
        }));

    if (files.length === 0) {
        console.warn(`No SVG files found in ${folder}, skipping update.`);
        return;
    }

    // Генерируем путь к иконкам
    const content = `export const ${folder}Icons = {\n` +
        files.map(({ originalName, formattedName }) => 
            `    ${folder}${formattedName}: \`${basePath}/${folder}/${originalName}.svg\`,`).join('\n') +
        `\n};\n`;

    fs.writeFileSync(tsFilePath, content, 'utf8');
    console.log(`✅ Updated: ${folder}.ts`);
});

console.log('✨ Icons list updated successfully!');

