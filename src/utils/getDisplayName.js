// HOC.displayName=`HOC(${getDisplayName(WrappedComponent)})`

class HOC extends WrappedComponent{
    static displayName=`HOC(${getDisplayName(WrappedComponent)})`
    // ...
}


function getDisplayName(WrappedComponent){
    return WrappedComponent.displayName||WrappedComponent.name||'Component'
}