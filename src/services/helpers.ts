export const retriveLocalStorage=<T,>(key:string) => {// ф-ція, яка може працювати з будь-яким типом даних, key: string — це ключ, за яким буде здійснюватися пошук значення в локальному сховищі
    const object = localStorage.getItem(key) || '';// якщо ключ відсутній, функція поверне null, і тоді використовується пустий рядок
    if (!object) {// перевіряється, чи значення є порожнім, якщо так, то функція повертає пустий об'єкт
        return {} as T;
    }
    const parse= JSON.parse(object);// якщо значення є, то воно з формату JSON стає об'єктом
    return parse as T;
}