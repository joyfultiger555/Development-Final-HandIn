import politicianInfo from "../politician-info.json"
import {PoliticianItem} from "../components/PoliticianItem.js"
import { useEffect, useState } from 'react';
import CheckBox from '../components/CheckBox.js'
import Button from './Button.js'

function Display() {
    let hm = 0;
    const [vote, setVote] = useState(0)
    const [total, setTotal] = useState(0)
    const [politician, setPolitician] = useState([])
    const [politician1, setPolitician1] = useState(0)
    const [partyFilters, setPartyFilters] = useState([]);
    const [branchFilters, setBranchFilters] = useState([]);
    const [sort, setSort] = useState(false);
    const [sortedData, setSortedData] = useState(politicianInfo.age)
    const toggleSortActiveHandler = () => setSort(a => !a);
    const updateVotes = (uid) => {
        let newVote = politician;
        if (!newVote[uid]){
          newVote[uid] = 1;
        }
        else{
          newVote[uid]+=1;
        }
        setVote({...newVote});

    }
    const removeVotes = (uid) => {
        let newVote = politician;
        if (!newVote[uid]){
          newVote[uid] = 0;
        }
        else{
          newVote[uid]-=1;
        }
        setVote({...newVote});
    }
    function partyFilter(party) {
        setPartyFilters([...partyFilters, party])
    }
    const removeParty = party => {
        setPartyFilters(partyFilters.filter(partyFilter => partyFilter != party));
    }
    function branchFilter(branch) {
        setBranchFilters([...branchFilters, branch])
    }
    const removeBranch = branch => {
        setBranchFilters(branchFilters.filter(branchFilter => branchFilter != branch))
    }

    const filterParty = item => {
        if (partyFilters.length === 0) return true;

        return partyFilters.includes(item.party);
    }
    const filterBranch = item => {
        if (branchFilters.length === 0) return true;

        return branchFilters.includes(item.branch);
    }
    const sortFunc = (a,b) => {
        return a.age - b.age
    }
    const change = (a,b) => {
        if (!(sort)) {
            return -1;
        } else {
            return sortFunc(a,b);
        }
    }

    return (
        <div>
            <div>
                <div className="title">Electoral College</div>
                <div>
                    <CheckBox party1={partyFilter} branch={branchFilter} removeParty={removeParty} removeBranch={removeBranch}/>
                </div>
                <div>
                    <Button class="sortButton" sortFunc={() => setSort(!sort)}/>
                </div>
                <div class="App">
                {politicianInfo.filter(item => filterParty(item)).filter(item => filterBranch(item)).sort((a,b) => change(a,b)).map((item, index) => {
                    return(<PoliticianItem key={index} updateVotes={updateVotes} item={item} index={index} vote={vote} setVote={setVote} removeVotes={removeVotes}/>)
                })}
                </div>
            </div>
            <div className="votes">
                <h2>Votes</h2>
                
                {Object.keys(politician).map((key) => {
                return(
                    <div className="votes">
                        {politicianInfo[key].name + ": " + politician[key] + " "}
                        
                    </div>
                )
                })}
                
            </div>
            <div className="totVotes">
                <h2>Total Votes: </h2>
                <div className="voteText">{politician.reduce((a,v) =>  a = a + v, 0 )}</div>
            </div>
        </div>
    )

}
export default Display