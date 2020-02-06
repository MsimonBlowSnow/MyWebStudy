/*
    以前的字符串拼接
            var person = 'ming';
            const age = 5;
            const = sentence = person+ 'is' + age+ 'yeas old.';
        缺点：缺少‘不容易发现
var person = 'ming';
const age = 5;
const sentence = person+ ' is ' + age+' yeas old.';
console.log(sentence);
 */
/*
    模板字符串：
        1.使用反引号包括起来`
        2.用${}包裹变量
            const person = 'ming';
            const age = 5;
            const sentence = `${person} is ${age*5} yeas old.`;
            console.log(sentence);
*/

/*以前用来定义html结构:
        const template = [
    '<main>',
        '<article>文章</article>',
        '<aside>主体内容</aside>',
    '</main>',
    ].join('');
        console.log(template);
*/

/*
    用模板字符串来定义结构

const name = "ming";
 const template = `
 <main>
    <article>${name}</article>
    <article>文章</article>
    <aside>主体内容</aside>
 </main>`.trim();
 console.log(template);
 */
 /*对象使用模板字符串*/
    const jelly = {
        name: 'jelly',
        date: '2017-05-07',
        todos: [
            {name: 'Go to school',completed: false},
            {name: 'Watch Movie',completed: false},
            {name: 'Running',completed: true},
        ]
    }
    
    function readTodos(name){
        const template = `
    <ul>
            ${name.todos.map(todo=>`
            <li>${todo.name} ${todo.completed ? 'true':'false'}</li>`).join('')};
     </ul>
    `
        return template;
    }
    const template = readTodos(jelly);
 console.log(template);



















