var dictionary = new Typo("en_US");
var wordsList = ["a"];
var inputWord = "a";
var currentWord = "a";
function isWord(word) {
    if ([""," "].indexOf(word)!=-1){return false}
    return dictionary.check(word);
}
function isModifyAvailable() {
    if (!isWord(currentWord)) { return false }
    if (diffLength >= 2) { return false }
    if (diffChar >= 2) { return false }
    return true;
}
function diffLength(word1, word2) {
    let count = Math.abs(word1.length - word2.length);
    return count
}
function diffChar(word1, word2) {
    let count = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] != word2[i]) {
            count++;
        }
    }
    return count;
}
function addToList(word) {
    if (isWord(word) && isModifyAvailable(word) && wordsList.indexOf(word) == -1) {
        wordsList.push(word);
        playCheerAnimation();
    }
}
function playCheerAnimation() {
    // 通过JavaScript添加CSS类来触发动画
    const inputElement = document.querySelector('.centered-input');
    inputElement.classList.add('cheer-effect');

    // 动画结束后移除CSS类
    inputElement.addEventListener('animationend', () => {
        inputElement.classList.remove('cheer-effect')})
    }


Vue.createApp({
    setup() {
        const inputWord = Vue.ref('a')

        Vue.watch(inputWord, (newValue, oldValue) => {

            addToList(newValue,oldValue);
            console.log(wordsList);
        });

        return {
            inputWord,
            wordsList
        }
    }

}).mount('#app')
