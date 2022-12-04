import "/Users/noahatanda/Desktop/uiux/Development-Anonymous/src/App.css"
function Button({sortFunc}) {
    return (
        <div className="sort">
            <button class="sortButton" onClick={sortFunc} value={"Sort By Age"}>Sort by Age</button>
        </div>
    )
}
export default Button