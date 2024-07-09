import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn={firstName:'Ankan',lastName:'Das',email:'dasankan210@gmail,com'};

  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox type='greeting' title='Welcome' user={loggedIn?.firstName || 'Guest'} subtext="Access and Manage your account and transaction efficiently."/>
                <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.35}  />
            
            
            </header>

        </div>

      <RightSidebar user={loggedIn}
                    transactions={[]}
                    banks={[{ currentBalance:1235.50},{ }]}
                    />

        

    </section>
  )
}

export default Home