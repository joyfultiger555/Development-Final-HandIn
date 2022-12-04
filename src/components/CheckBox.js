import "../App.css"

function CheckBox({party1: applyParty, branch: applyBranch, removeParty, removeBranch}) {
    const handleParty = (e, party) => {
        if (!(e.target.checked) == true) {
            removeParty(party)
        } else {
            applyParty(party)
        }
    }

    const handleBranch = (e, branch) => {
        if (!(e.target.checked) == true) {
            
            removeBranch(branch)
        } else {
            applyBranch(branch)
        }
    }
    return (
        <div>
            <div className="sortPartyText">Filter by Party</div>
            <div class="party">
                <input type="checkbox" onChange={e => handleParty(e, "Democrat")}/>
                Democrat
                
                <input type="checkbox" value="republican" onChange={e => handleParty(e, "Republican")}/>
                Republican
            </div>
            <div className="sortBranchText">Filter by Branch</div>
            <div class="branch">
                
                <input type="checkbox" onChange={e => handleBranch(e, "Executive")}/>
                Executive
                <input type="checkbox" onChange={e => handleBranch(e, "Legislative")}/>
                 Legislative
                <input type="checkbox" onChange={e => handleBranch(e, "Judicial")}/>
                Judicial
            </div>
        </div>
    )
    
}
export default CheckBox