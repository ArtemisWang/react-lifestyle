# 一. 关于React新生命周期的测试
## 1-getDerivedStateFromProps
1. 适用于子组件自身存在状态，且该状态值依赖于父组件传props的情况，同时子组件自身也能控制自己的状态
2. 这样其实是有异议的，状态应该小却精，如果组件自身就能够控制自己的状态不应把控制权提升到父组件实现
3. 在此生命周期可以判断是否更新自己维护的状态变量，如果更新写在return中返回，如果不更新return null

## 2-getSnapshotBeforeUpdate(prevProps,prevState)
1. 需要包含一个返回值，返回值会传到componentDidUpdate(prevProps,prevState,snapShot)中的第三个参数中
2. 此周期在render之后执行，如其名一样，只是拍照，不建议做其他逻辑编写，应该转到componentDidUpdate中写

# 二. 组件间的通讯方式
## 1-父组件向子组件通讯
父组件通过props向子组件传递需要的信息

## 2-子组件向父组件通讯
1. 利用回调函数：父组件传递回调函数给子组件，子组件调用此回调函数传递值给父组件
2. 自定义事件机制

## 3-跨级组件间通讯
1. 使用context：父组件中定义getChildContext(){}，这样从这一层开始的子组件都能拿到定义的context
2. 适合应用于页面主题、用户信息等场景，需要全局变量的情况

## 4-没有嵌套关系的组件之间的通讯
1. 使用自定义事件机制:Node.js中EventEmitter类。
2. List组件中调用自定义事件，App组件中定义自定义事件，两者中的emitter都是引用自单例模式的EventEmitter实例。
3. Pub/Sub模式，利用全局对象来保存事件，用广播的方式去处理事件。

# 三. 组件间抽象：mixin和高阶组件，用于抽象出需要被不同组件公用的功能
## 1-mixin
1. 本质：多重继承，用赋值的方式将mixin对象里的方法挂载到原对象上。
2. 但在es6 class方式定义的组件中无法使用mixin。
3. es6 class方法定义的组件，使用'core-decorators'中的mixin装饰器方法来实现多重继承。

## 2-高阶组件
1. 接收组件作为输入，输出一个新的组件。
2. 构建方法：属性代理、反向继承
3. 属性代理可以实现功能：控制props、通过refs使用引用、抽象state、使用其他元素包裹WrappedComponent
4. 反向继承可以实现功能：渲染劫持、

## 3-高阶组件实现动态加载实例(属性代理方式)
1. utils/AsyncComponent.js
2. utils/AsyncComponent_.js

## 4-高阶组件命名继承
1. utils/getDisplayName.js
2. recompose库

## 5-高阶组件传递参数
HOCFactoryFactory.js


# 四. 组件性能优化
## 1-PureRender减少渲染(最重要最常见的性能优化方法)
1. 原理：重新实现shouldComponentUpdate生命周期方法，让当前传入的props和state与之前的作浅比较，相同则返回false
2. 使用：PureRenderComponent.js，将App组件中handleColor中更新状态部分注释，这样每次渲染传递给PureRenderComponent的props是一样的，测试结果显示确实没有重复渲染
