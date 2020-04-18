# 关于React新生命周期的测试
## 1-getDerivedStateFromProps
1. 适用于子组件自身存在状态，且该状态值依赖于父组件传props的情况，同时子组件自身也能控制自己的状态
2. 这样其实是有异议的，状态应该小却精，如果组件自身就能够控制自己的状态不应把控制权提升到父组件实现
3. 在此生命周期可以判断是否更新自己维护的状态变量，如果更新写在return中返回，如果不更新return null

## 2-getSnapshotBeforeUpdate(prevProps,prevState)
1. 需要包含一个返回值，返回值会传到componentDidUpdate(prevProps,prevState,snapShot)中的第三个参数中
2. 此周期在render之后执行，如其名一样，只是拍照，不建议做其他逻辑编写，应该转到componentDidUpdate中写

# 组件间的通讯方式
## 1-父组件向子组件通讯
父组件通过props向子组件传递需要的信息

## 2-子组件向父组件通讯
1. 利用回调函数：父组件传递回调函数给子组件，子组件调用此回调函数传递值给父组件
2. 自定义事件机制

## 3-跨级组件间通讯
1. 使用context：父组件中定义getChildContext(){}，这样从这一层开始的子组件都能拿到定义的context
2. 适合应用于页面主题、用户信息等场景，需要全局变量的情况

## 4-没有嵌套关系的组件之间的通讯
使用自定义事件机制:Node.js中EventEmitter类。
List组件中调用自定义事件，App组件中定义自定义事件，两者中的emitter都是引用自单例模式的EventEmitter实例。