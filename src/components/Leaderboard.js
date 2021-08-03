import React from 'react'
import Avatar from './Avatar'
import UserRecord from './UserRecord'
import { connect } from 'react-redux'

function Leaderboard (props) {
  const { sortedRanks } = props
  return (
    <div>
      <div className="bg-gradient-to-b from-cerise-red-600 to-cerise-red-500 h-96 justify-center items-center text-white flex flex-row gap-10">
        <Avatar dimensions={'h-64 w-64'} avatarURL={sortedRanks[0].picture} />
        <div className="flex flex-col text-left gap-2">
          <p className="font-medium text-3xl">#1 Ranked User</p>
          <p className="font-bold text-6xl">{sortedRanks[0].name}</p>
        </div>
        <img src='/trophy.png' alt="trophy" className="h-max" />
      </div>
      <div className="flex flex-col justify-center items-center my-10">
        {sortedRanks.map((rankedUser, index) => (
          <UserRecord
            key={rankedUser.name}
            index={index}
            rankedUser={rankedUser}
          />
        ))}
      </div>
    </div>
  )
}

function mapStateToProps ({users}, props) {
  const playersData = Object.keys(users).map(user => {
    const answered = Object.keys(users[user].answers).length
    const asked = users[user].questions.length
    return {
      picture: users[user].avatarURL,
      name: users[user].name,
      answered,
      asked,
      score: answered + asked
    }
  })
  const sortedRanks = playersData.sort((a,b) => b.score - a.score)
  return {
    sortedRanks
  }
}

export default connect(mapStateToProps)(Leaderboard)