import React, {useState} from 'react'
import styled from "styled-components"
import Header from '../includes/Header'
import ApexCharts from 'apexcharts'
import Chart from "react-apexcharts";


export default function Dashboard() {

    const [state, setState]= useState({
        options:{
          candlestick: {
            wick: {useFillColor: true,}
          },
          grid: {
            show: false},
          xaxis: {
            tickPlacement: 'between',
            tickAmount: 8,
            axisBorder: {
              show: false,},
              crosshairs: {
                show: false,},
            
              axisTicks: {
                show: false,
                
            },
            labels: {
              show: true,
              rotate: 0,
              style: {
                colors: "#7B7F94",
                fontSize: '12px',
                fontFamily: 'DM Sans',
                fontWeight: 400,

            }
            }
            
            
           },  
          yaxis: {
           
            opposite: true,
            labels: {
              formatter: function (value) {
                return "$ 0.06642";    // "$ "+(value/10000)
               
              },
              style: {
                colors: "#7B7F94",
                fontSize: '12px',
                fontFamily: 'DM Sans',
                fontWeight: 400,

            },
            },
          }, 
          chart: {
            toolbar: {
              show: false,}},
         
            responsive: [{
                breakpoint: 640,
                options: {
                    yaxis: {
                        opposite: true,
                        labels: {
                          formatter: function (value) {
                            return "$ .0664";    // "$ "+(value/10000)
                          },
                          style: {
                            colors: "#7B7F94",
                            fontSize: '10px',
                            fontFamily: 'DM Sans',
                        },
                        },
                      },
                    xaxis: {
                       
                        labels: {
                          rotate: 0,
                          style: {
                            fontSize: '10px',
                            fontWeight: 400,
                        }
                        }
                       },   
                },
            },
            {
                breakpoint: 480,
                options: {
                    chart: {
                        height: '250'
                    },
                    yaxis: {
                        opposite: true,
                        labels: {
                          formatter: function (value) {
                            return "$ .0664";    // "$ "+(value/10000)
                          },
                          style: {
                            colors: "#7B7F94",
                            fontSize: '8px',
                            fontFamily: 'DM Sans',
                        },
                        },
                      },
                    xaxis: {
                       
                        labels: {
                          rotate: -90,
                          style: {
                            fontSize: '8px',
                            fontWeight: 400,
                        }
                        }
                       },   
                },
            }
        ]
        }
        ,
        series: [{
          data: [{
              x: ["08:00"],
              y: [6629.81, 6650.5, 6623.04, 6633.33]
            },
            {
              x: ["8:15"],
              y: [6614.9, 6626.2, 6613.33, 6623.45]
            },
            {
              x: ["8:30"],
              y: [6632.01, 6643.59, 6620, 6630.11]
            },
            {
                x: ["8:45"],
                y: [6623.48, 6627, 6618.38, 6620.35]
              },
            {
              x: ["09:00"],
              y: [6630.71, 6648.95, 6623.34, 6635.65]
            },
            {
              x: ["9:15"],
              y: [6615.53, 6617.93, 6610, 6615.19]
            },
            {
              x: ["9:30"],
              y: [6635.65, 6651, 6629.67, 6638.24]
            },
            {
              x: ["9:45"],
              y: [6615.19, 6621.6, 6608.2, 6620]
            },
            {
              x: ["10:00"],
              y: [6638.24, 6640, 6620, 6624.47]
            },
            {
              x: ["10:15"],
              y: [6619.43, 6620.35, 6610.05, 6615.53]
            },
            {
              x: ["10:30"],
              y: [6624.53, 6636.03, 6621.68, 6624.31]
            },
            {
              x: ["10:45"],
              y: [6619.54, 6625.17, 6614.15, 6620]
            },
            {
              x: ["11:00"],
              y: [6624.61, 6632.2, 6617, 6626.02]
            },
            {
              x: ["11:15"],
              y: [6620.33, 6634.15, 6617.24, 6624.61]
            },
            {
              x: ["11:30"],
              y: [6627, 6627.62, 6584.22, 6603.02]
            },
            {
              x: ["11:45"],
              y: [6625.95, 6626, 6611.66, 6617.58]
            },
            {
              x: ["12:00"],
              y: [6605, 6608.03, 6598.95, 6604.01]
            },
            {
              x: ["12:15"],
              y: [6619, 6625.97, 6595.27, 6598.86]
            },
            {
              x: ["12:30"],
              y: [6604.5, 6614.4, 6602.26, 6608.02]
            },
            {
              x: ["12:45"],
              y: [6598.86, 6598.88, 6570, 6587.16]
            },
            {
              x: ["13:00"],
              y: [6608.02, 6610.68, 6601.99, 6608.91]
            },
            {
              x: ["13:15"],
              y: [6588.86, 6600, 6580, 6593.4]
            },
            {
              x: ["13:30"],
              y: [6608.91, 6618.99, 6608.01, 6612]
            },
            {
              x: ["13:45"],
              y: [6593.99, 6598.89, 6585, 6587.81]
            },
            {
              x: ["14:00"],
              y: [6612, 6615.13, 6605.09, 6612]
            },
            {
              x: ["14:15"],
              y: [6587.81, 6592.73, 6567.14, 6578]
            },
            {
              x: ["14:30"],
              y: [6612, 6624.12, 6608.43, 6622.95]
            },
            {
              x: ["14:45"],
              y: [6578.35, 6581.72, 6567.39, 6579]
            },
            {
              x: ["15:00"],
              y: [6623.91, 6623.91, 6615, 6615.67]
            },
            {
              x: ["15:15"],
              y: [6579.38, 6580.92, 6566.77, 6575.96]
            },
            {
              x: ["15:30"],
              y: [6618.69, 6618.74, 6610, 6610.4]
            },
            {
              x: ["15:45"],
              y: [6575.96, 6589.25, 6571.77, 6588.92]
            },
            {
              x: ["16:00"],
              y: [6611.25, 6622.78, 6610.45, 6614.94]
            },
          ]
        }],  
      })
     
    const [activityDay, setActivityDay] = useState({
        
            withdrawal:
                {amount : "-$1403.00",
                type: "ETH 0.64"},
            CashIn:
                {amount : "+$2203.00",
                type: "BIT 0.22"},
             TopUp:
                {amount : "-$403.00",
                type: "ETH 0.44"}
        
    }
    );

    const [btnstate, setBtnState] = useState(1);
        let Togglebtn = (index) =>{
        setBtnState(index);
        let id =index;
        if(id==1){
            setActivityDay({
                withdrawal:{amount : "-$1403.00",
                type: "ETH 0.64"},
                CashIn:{amount : "+$2203.00",
                        type: "BIT 0.22"},
                TopUp:{amount : "-$403.00",
                       type: "ETH 0.44"}
                    })

        }
        if(id==2){
            setActivityDay({
                withdrawal:{amount : "-$11403.00",
                            type: "ETH 0.1264"},
                CashIn:{amount : "+$9943.00",
                        type: "BIT 1.22"},
                TopUp:{amount : "-$1903.00",
                       type: "ETH 22.24"}
        
            });
        }
        if(id==3)
        {setActivityDay({
            withdrawal:{amount : "-$991403.00",
                        type: "ETH 7.1264"},
                CashIn:{amount : "+$89943.00",
                        type: "BIT 175.25"},
                 TopUp:{amount : "-$72903.00",
                        type: "ETH 754.84"}
    
        })}
        
        };

  return (
    <>
        
        <SectionDashboard>
        <Header/>
            <SectionWrapper>
                <DashboardLeft>
                    <LeftTop>
                        <TopThreeContainer>
                            <TopInnerTop>
                                <TopCount>852,00</TopCount>
                                <UpImageContainer>
                                    <SpanContainer>
                                    <TopImage src = {require("../assets/greenup.svg").default} alt = "image"></TopImage>
                                    </SpanContainer>
    
                                    <Percentage>-10%</Percentage>
                                </UpImageContainer>
                            
                            </TopInnerTop>
                            <TopInnerBottom>
                                <SymbolSpan>
                                    <BottomImage src = {require("../assets/diamond.svg").default} alt = "image"/>
                                </SymbolSpan>                            
                                <GraphImage src = {require("../assets/graph.svg").default} alt = "image"/>

                            </TopInnerBottom>
                        </TopThreeContainer>
                        <TopThreeContainer>
                            <TopInnerTop>
                                <TopCount>342,00</TopCount>
                                <UpImageContainer>
                                    <SpanContainerRed>
                                    <TopImage src = {require("../assets/reddown.svg").default} alt = "image"></TopImage>
                                    </SpanContainerRed>
    
                                    <PercentageRed>-10%</PercentageRed>
                                </UpImageContainer>
                            
                            </TopInnerTop>
                            <TopInnerBottom>
                                <SymbolSpan>
                                    <BottomImage src = {require("../assets/coinwater.svg").default} alt = "image"/>
                                </SymbolSpan>                            
                                <GraphImage src = {require("../assets/graph.svg").default} alt = "image"/>

                            </TopInnerBottom>
                        </TopThreeContainer>
                        <TopThreeContainer>
                            <TopInnerTop>
                                <TopCount>852,00</TopCount>
                                <UpImageContainer>
                                    <SpanContainer>
                                    <TopImage src = {require("../assets/greenup.svg").default} alt = "image"></TopImage>
                                    </SpanContainer>
    
                                    <Percentage>-10%</Percentage>
                                </UpImageContainer>  
                            </TopInnerTop>  
                            <TopInnerBottom>
                                <SymbolSpan>
                                    <BottomImage src = {require("../assets/bitcoin.svg").default} alt = "image"/>
                                </SymbolSpan>                            
                                <GraphImage src = {require("../assets/graph.svg").default} alt = "image"/>

                            </TopInnerBottom>
                        </TopThreeContainer>
                    </LeftTop>      {/* left top section */}
           
                    <DashboardMiddleSection>
                        <LeftMiddleInsideTop>
                            <MarketContainer>
                                <MarketTitle>Trading Market</MarketTitle>
                            </MarketContainer>
                            <TimeContainer>
                                <TimeData>1m</TimeData>
                                <TimeData>30m</TimeData>
                                <TimeDataSelect>
                                    <TimeDataOption>1 h</TimeDataOption>
                                    <TimeDataOption>1 day</TimeDataOption>
                                    <TimeDataOption>1 week</TimeDataOption>
                                    <TimeDataOption>1 mon</TimeDataOption>
                                </TimeDataSelect>
                                <TimeIMages src = {require("../assets/timedata1.svg").default} alt="timeImage" />
                                <TimeIMages src = {require("../assets/graph.svg").default} alt="timeImage" />
                                <TimeIMages src = {require("../assets/timedata3.svg").default} alt="timeImage" />
                                <TimeIMages src = {require("../assets/timedata4.svg").default} alt="timeImage" />


                            </TimeContainer>

                        </LeftMiddleInsideTop>
                        <LeftMiddleInsideBottom>
                            
                            <RightGraphContainer>
                                <LeftToolContainer>
                                    <ToolIMage src={require("../assets/tool1.svg").default}/>
                                    <ToolIMage src={require("../assets/tool2.svg").default}/>
                                    <ToolIMage src={require("../assets/tool3.svg").default}/>
                                    <ToolIMage src={require("../assets/tool4.svg").default}/>
                                    <ToolIMage src={require("../assets/tool5.svg").default}/>
                                    <ToolIMage src={require("../assets/tool6.svg").default}/>
                                    <ToolIMage src={require("../assets/tool7.svg").default}/>
                                </LeftToolContainer>
                                <Main>
                                    <GraphTitleContainer>
                                        <GraphTitleLeftContainer>
                                            <GraphType>DEFT/ETH</GraphType>
                                            <GraphTime>1h</GraphTime>
                                            <GraphSwap>Uniswap</GraphSwap>
                                        </GraphTitleLeftContainer>  
                                        <GraphTitleRightContainer>
                                            <DataTitle>O<GraphDataGreen>0.0682</GraphDataGreen></DataTitle>
                                            <DataTitle>H<GraphData>0.0682</GraphData></DataTitle>
                                            <DataTitle>L<GraphData>0.0682</GraphData></DataTitle>
                                            <DataTitle>C<GraphData>0.0682</GraphData></DataTitle>    
                                        </GraphTitleRightContainer>
                                    </GraphTitleContainer>
                                
                                    <SpanVolume>VOLUME $223K</SpanVolume>
                                    <MainGraphContainer>
                                        <Graph>  
                                            <ChartContainer>
                                                <Chart
                                                    options={state.options}
                                                    series={state.series}
                                                    type="candlestick"
                                                    // width={800}
                                                    height={200}
                                                    
                                                    
                                                />
                                            </ChartContainer>
                                        </Graph>
                                    </MainGraphContainer>
                                </Main>
                            </RightGraphContainer>
                        </LeftMiddleInsideBottom>
                    </DashboardMiddleSection> {/* left middle section */}
                    
                    <LeftBottomContainer>
                        <LeftBottomTwoContainers>
                            <ActivityContainer>
                                <ActivityLeftContainer>
                                    <ActivityTitile>Activity</ActivityTitile>
                                </ActivityLeftContainer>
                                <ActivityRightContainer>
                                    <ActivityButtons className={btnstate ===1?"active":"notactive"} onClick={() =>Togglebtn(1)} >D</ActivityButtons>
                                    <ActivityButtons className={btnstate ===2?"active":"notactive"} onClick={() =>Togglebtn(2)} >M</ActivityButtons>
                                    <ActivityButtons className={btnstate ===3?"active":"notactive"} onClick={() =>Togglebtn(3)} >Y</ActivityButtons>         
                                </ActivityRightContainer>
                            </ActivityContainer>
                            <MoneyContainer>
                                    <MoneyLeftContainer>
                                        <MoneySpan>
                                            <MoneyImage src={require("../assets/moneygreen.svg").default} alt= "moneyImage" />
                                        </MoneySpan>
                                        <MoneyDateContainer>
                                            <TypeTransaction>Withdraw</TypeTransaction>
                                            <DateTransaction>12-02-21</DateTransaction>
                                        </MoneyDateContainer>
                                    </MoneyLeftContainer>
                                    <MoneyRightContainer>
                                        <TransactionAmountRed>{`${activityDay.withdrawal.amount}`}</TransactionAmountRed>
                                        <MoneyTypeRed>{`${activityDay.withdrawal.type}`}</MoneyTypeRed>
                                    </MoneyRightContainer>
                                </MoneyContainer>
                                <MoneyContainer>
                                    <MoneyLeftContainer>
                                        <MoneySpan>
                                            <MoneyImage src={require("../assets/moneygreen.svg").default} alt= "moneyImage" />
                                        </MoneySpan>
                                        <MoneyDateContainer>
                                            <TypeTransaction>Cash In</TypeTransaction>
                                            <DateTransaction>12-02-21</DateTransaction>
                                        </MoneyDateContainer>
                                    </MoneyLeftContainer>
                                    <MoneyRightContainer>
                                        <TransactionAmount>{`${activityDay.CashIn.amount}`}</TransactionAmount>
                                        <MoneyType>{`${activityDay.CashIn.type}`}</MoneyType>
                                    </MoneyRightContainer>
                                </MoneyContainer>
                                <MoneyContainer>
                                    <MoneyLeftContainer>
                                        <MoneySpan>
                                            <MoneyImage src={require("../assets/moneygreen.svg").default} alt= "moneyImage" />
                                        </MoneySpan>
                                        <MoneyDateContainer>
                                            <TypeTransaction>Top Up</TypeTransaction>
                                            <DateTransaction>12-02-21</DateTransaction>
                                        </MoneyDateContainer>
                                    </MoneyLeftContainer>
                                    <MoneyRightContainer>
                                        <TransactionAmountRed>{`${activityDay.TopUp.amount}`}</TransactionAmountRed>
                                        <MoneyTypeRed> {`${activityDay.TopUp.amount}`}</MoneyTypeRed>
                                    </MoneyRightContainer>
                                </MoneyContainer>
                        </LeftBottomTwoContainers>
                        <LeftBottomTwoContainers>
                            <CapContainer>
                                <CapLeftContainer>
                                    <CapTitle>Market Cap</CapTitle>
                                </CapLeftContainer>
                                <CapRightContainer>
                                    <SeeButton>See All</SeeButton>
                                </CapRightContainer>
                            </CapContainer>
                            <PairContainer>
                                <PairLeft>
                                    <PairLeftTitle>Pair</PairLeftTitle>
                                </PairLeft>
                                <PairMiddle>
                                    <PairMiddleTitle>Price</PairMiddleTitle>
                                </PairMiddle>
                                <PairRight>
                                    <PairRightTitle>Change</PairRightTitle>
                                </PairRight>
                            </PairContainer>
                            <StarContainer>
                                <StarLeft>
                                    <StarImage src={require("../assets/star.svg").default} alt="starIMage" />
                                    <StarType>ARK/BTC</StarType>
                                </StarLeft>
                                <StarMiddle>
                                    <StarPrice>0.00088</StarPrice>
                                </StarMiddle>
                                <StarRight>
                                    <StarPerc>+1.36%</StarPerc>
                                </StarRight>
                            </StarContainer>
                            <StarContainer>
                                <StarLeft>
                                    <StarImage src={require("../assets/star.svg").default} alt="starIMage" />
                                    <StarType>ARK/BTC</StarType>
                                </StarLeft>
                                <StarMiddle>
                                    <StarPriceRed>0.00088</StarPriceRed>
                                </StarMiddle>
                                <StarRight>
                                    <StarPercRed>-1.36%</StarPercRed>
                                </StarRight>
                            </StarContainer>
                            <StarContainer>
                                <StarLeft>
                                    <StarImage src={require("../assets/star.svg").default} alt="starIMage" />
                                    <StarType>ARK/BTC</StarType>
                                </StarLeft>
                                <StarMiddle>
                                    <StarPrice>0.00088</StarPrice>
                                </StarMiddle>
                                <StarRight>
                                    <StarPerc>+1.36%</StarPerc>
                                </StarRight>
                            </StarContainer>
                            <StarContainer>
                                <StarLeft>
                                    <StarImage src={require("../assets/star.svg").default} alt="starIMage" />
                                    <StarType>ARK/BTC</StarType>
                                </StarLeft>
                                <StarMiddle>
                                    <StarPriceRed>0.00088</StarPriceRed>
                                </StarMiddle>
                                <StarRight>
                                    <StarPercRed>-1.36%</StarPercRed>
                                </StarRight>
                            </StarContainer>
                        </LeftBottomTwoContainers>
                    </LeftBottomContainer>  {/* left bottom section */}
                </DashboardLeft>   {/* dashboard left section */}
               
                <DashboardRight>
                    <RightTopContainer>
                        <TopInsideTop>
                            <InsideTopLeft>
                                <Amount>Amount</Amount>
                            </InsideTopLeft>
                            <InsideTopRight>
                               <CoinSpan> <TopInsideImage src={require("../assets/bitcoin.svg").default} alt="Coin-image"></TopInsideImage></CoinSpan>
                               <CoinSpan> <TopInsideImage src={require("../assets/diamond.svg").default} alt="Coin-image"></TopInsideImage></CoinSpan>
                               <CoinSpan> <TopInsideImage src={require("../assets/coinwater.svg").default} alt="Coin-image"></TopInsideImage></CoinSpan>
                            </InsideTopRight>
                        </TopInsideTop>
                        <RightTopMiddle>
                            <MiddleTopInside>
                            <TotalAmount>656582,00</TotalAmount>
                            </MiddleTopInside>
                            <MiddleBottomInside>
                                <DepositContainer>
                                    <DepositImage src={require("../assets/deposit.svg").default} alt="depositImage"></DepositImage>
                                    <Deposit>Deposit</Deposit>
                                </DepositContainer>
                                <WithdrawelContainer>
                                    <WithdrawImage src={require("../assets/withdraw.svg").default} alt="WithdrawImage"></WithdrawImage>
                                    <Withdraw>Withdraw</Withdraw>
                                </WithdrawelContainer> 
                            </MiddleBottomInside>                           
                            
                        </RightTopMiddle>
                        <RightTopBottom>
                            <TransactionTitle>Recent Transaction</TransactionTitle>
                            <BitCoinContainer>
                                <BitCoinLeftContainer>
                                    <BitcoinSpan><BitcoinImage src = {require("../assets/bitcoin.svg").default} alt = "BitcoinImage" /></BitcoinSpan>
                                    <BitCoinTitleContainer>
                                        <NameCoin>Bitcoin</NameCoin>
                                        <NameCoinType>BTC</NameCoinType>
                                    </BitCoinTitleContainer>
                                </BitCoinLeftContainer>
                                <BitCoinRightContainer>
                                    <BitcoinAmount>$240.00</BitcoinAmount>
                                    <BitcoinTime>12:00AM</BitcoinTime>
                                </BitCoinRightContainer>
                            </BitCoinContainer>
                            <BitCoinContainer>
                                <BitCoinLeftContainer>
                                    <BitcoinSpan><BitcoinImage src = {require("../assets/coinwater.svg").default} alt = "BitcoinImage" /></BitcoinSpan>
                                    <BitCoinTitleContainer>
                                        <NameCoin>Bitcoin</NameCoin>
                                        <NameCoinType>BTC</NameCoinType>
                                    </BitCoinTitleContainer>
                                </BitCoinLeftContainer>
                                <BitCoinRightContainer>
                                    <BitcoinAmount>$240.00</BitcoinAmount>
                                    <BitcoinTime>12:00AM</BitcoinTime>
                                </BitCoinRightContainer>
                            </BitCoinContainer>
                            <BitCoinContainer>
                                <BitCoinLeftContainer>
                                    <BitcoinSpan><BitcoinImage src = {require("../assets/diamond.svg").default} alt = "BitcoinImage" /></BitcoinSpan>
                                    <BitCoinTitleContainer>
                                        <NameCoin>Bitcoin</NameCoin>
                                        <NameCoinType>BTC</NameCoinType>
                                    </BitCoinTitleContainer>
                                </BitCoinLeftContainer>
                                <BitCoinRightContainer>
                                    <BitcoinAmount>$240.00</BitcoinAmount>
                                    <BitcoinTime>12:00AM</BitcoinTime>
                                </BitCoinRightContainer>
                            </BitCoinContainer>           
                        </RightTopBottom>
                    </RightTopContainer>
                    <RightBottomSection>
                        <RightBottomInsideTop>
                            <LeftExchangeTitle>Exchange</LeftExchangeTitle>
                                <RightSyncSpan>
                                    <RightSyncImage src = {require("../assets/sync.svg").default} alt = "syncImage" />
                                </RightSyncSpan>
                        </RightBottomInsideTop>
                        <RightBottomInsideMiddle>
                            
                            <SaleName>Sale</SaleName>
		                    <SaleContainer>
                                <SaleAmount>$678</SaleAmount>
			                    <SaleAmountRightContaner>
                                    <CurrencyDropdown>
                                        <Currency>USD</Currency>
                                        <Currency>ETH</Currency>

				                    </CurrencyDropdown>

                                </SaleAmountRightContaner>
                            </SaleContainer>
                            <SaleName>buy</SaleName>
		                    <SaleContainer>
                                <SaleAmount>0.990</SaleAmount>
			                    <SaleAmountRightContaner>
				                    <CurrencyDropdown>
                                        <Currency>ETH</Currency>
                                        <Currency>USD</Currency>
                                    </CurrencyDropdown>

                                </SaleAmountRightContaner>
                            </SaleContainer>

                        </RightBottomInsideMiddle>
                        <RightBottomSubmitButton>Exchange Now</RightBottomSubmitButton>


                    </RightBottomSection>


 

	


                </DashboardRight>
            </SectionWrapper>
        </SectionDashboard>
  
    </> )
}

const SectionDashboard = styled.div`
background-color:  #111219;
width:100%

`
const SectionWrapper = styled.div`
display: flex;
justify-content: space-between;
max-width :1200px;
width: 90%;
margin: 60px auto 0;
@media (max-width:980px){
    flex-direction: column;
}
@media (max-width:480px){
    margin: 30px auto;

}
`
const DashboardLeft = styled.div`
width:70%;
@media (max-width:980px){
    width:100%;
}
`
const LeftTop = styled.div`
display: flex;
justify-content: space-between;
@media (max-width: 640px){
    flex-direction: column;
}
`
const TopThreeContainer = styled.div`
border-radius: 8px;
padding: 20px;
width: 25%;
background-color: #171B2C ;
margin: 0 0 50px;
@media (max-width: 1200px){
    width: 32%; 
}
@media (max-width: 640px){
    width: 100%;
}
@media (max-width: 640px){
    margin: 0 0 20px;

}
`
const TopInnerTop = styled.div`
display: flex;
justify-content: space-between;

`
const TopCount = styled.h4`
color: #fff;
`
const UpImageContainer = styled.div`
display: flex;
`
const SpanContainer = styled.span`
background-color: rgba(24,44,50,255);
border-radius: 50%;
width: 25px;
height: 25px;
display: flex;
justify-content: center;
align-items: center;
margin-right: 5px;
`
const SpanContainerRed = styled.span`
background-color: #2d1b31;
border-radius: 50%;
width: 25px;
height: 25px;
display: flex;
justify-content: center;
align-items: center;
margin-right: 5px;
`
const TopImage = styled.img`
width: 15px;
height: 15px;
display: block;

`
const TopInnerBottom = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 20px;
`
const SymbolSpan = styled.span`
border-radius: 50%;
background-color: #111219;
width: 30px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;

`
const BottomImage = styled.img`
width: 20px;
height: 20px;
display: block;
`
const GraphImage = styled.img`
width: 40px;
height: 40px;
display: block;
`

const Percentage = styled.span`
color: #07af5a;
display: block;
`
const PercentageRed = styled.span`
color: #07af5a;
display: block;
color: #983752;
`

const DashboardMiddleSection = styled.div`
width:100%;

background-color:#171B2C;
margin-bottom: 50px;
padding: 20px;
`
const LeftMiddleInsideTop = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 20px;
@media (max-width:640px){
    flex-direction: column;
    
}
`
const MarketContainer = styled.div`


`
const MarketTitle = styled.h3`
font-weight: 500;
color: #BDC5D9;
font-size: 16px;
`
const TimeContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
@media (max-width:640px){
    width: 50%;
    
}


`
const TimeData = styled.h4`
color: #BDC5D9;
font-weight: 400;
margin-right: 10px;
cursor: pointer;
`
const TimeDataSelect = styled.select`
color: #BDC5D9;
width: 45px;
margin-right: 10px;
font-weight: 400;


`
const TimeDataOption = styled.option`
color: #BDC5D9;
font-weight: 600;
`
const TimeIMages = styled.img`
display: block;
width: 15px;
height: 15px;
margin-right: 10px;

`
const LeftMiddleInsideBottom = styled.div`
display: flex;
align-items: center;
`
const LeftToolContainer = styled.div`
display: flex;
flex-direction: column;
width: 30px;
@media (max-width:640px){
    width: 100%;
    flex-direction: row;
    justify-content: right;
      
}
`
const ToolIMage = styled.img`
display: block;
width: 15px;
margin-bottom: 5px;
cursor: pointer;
@media (max-width:640px){
    margin-right: 10px;

      
}
`
const RightGraphContainer = styled.div`
width: 100%;
display: flex;
@media (max-width:640px){
    flex-direction:column;  
}

`
const Main = styled.div`
width:100%;
@media (max-width:640px){
    flex-direction:column;  
    justify-content: left;
}


`
const GraphTitleContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-right: 25px;
@media (max-width:640px){

flex-direction:column;
justify-content: flex-start;
align-items: flex-start;


  
}
`
const GraphTitleLeftContainer = styled.div`
display: flex;
align-items: center;
width: 25%;
@media (max-width:640px){
width: 45%;
margin-bottom: 10px;
align-items: center;     
}
@media (max-width:980px){
width: 30%;

}
`
const GraphType = styled.h3`
color: #BDC5D9;
font-weight: 500;
font-size: 14px;
margin-right: 10px;


`
const GraphTime = styled.h3`
color: #BDC5D9;
font-size: 14px;
font-weight: 500;
margin-right: 10px;




`
const GraphSwap = styled.h3`
color: #BDC5D9;
font-size: 14px;
font-weight: 500;


`
const GraphTitleRightContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 32%;
@media (max-width:768px){
    width:40%
}
@media (max-width:640px){
    width:60%
}
@media (max-width:480px){
    width:80%
}
@media (max-width:360px){
    width:100%
}

`
const DataTitle = styled.span`
display: flex;
align-items: center;
color: #BDC5D9;
font-size: 10px;

`
const GraphDataGreen = styled.span`
color: #459E75;
margin-left: 5px;
font-size: 10px;
display: block;

`
const GraphData = styled.span`
color: #A1474F;
margin-left: 5px;
font-size: 10px;
display: block;




`
const SpanVolume = styled.span`
color:#7B7F94;
font-size:10px;
`
const MainGraphContainer = styled.div``
const Graph = styled.div`
width: 100%;

`
const LeftBottomContainer = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 50px;
@media (max-width:640px){
    flex-direction: column;

}

`
const LeftBottomTwoContainers = styled.div`
width:46%;
background:#171B2C;
border-radius: 8px;
padding: 20px;
@media (max-width:640px){
width:100%;
margin-bottom: 15px;
    
}
`
const ActivityContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const ActivityLeftContainer = styled.div``
const ActivityTitile = styled.h3`
color:#BDC5D9 ;
font-size: 14px;
font-weight: 600;
`
const ActivityRightContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const ActivityButtons = styled.button`
background-color: #1d2033;
color: #7B7F94;
display: block;
padding: 5px; 
border-radius: 6px;
font-size: 10px;
margin-left: 5px;
`
const MoneyContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 15px;
`
const MoneyLeftContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const MoneySpan = styled.span`
display: flex;
justify-content: center;
align-items: center;
border-radius: 6px;
background-color: #111219;
width: 20px;
height: 20px;

`
const MoneyImage = styled.img`
width: 15px;
height: 15px;
display: block;
`
const MoneyDateContainer = styled.div`
margin-left: 10px;
`
const TypeTransaction = styled.h4`
color:#BDC5D9 ;
font-size: 12px;
font-weight: 600;
`
const DateTransaction = styled.h6`
color:#BDC5D9 ;
font-size: 10px;
font-weight: 600;
`
const MoneyRightContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;

`
const TransactionAmount = styled.h4`
color:#459E75 ;
font-size: 12px;
font-weight: 500;
`
const MoneyType = styled.h6`
color:#459E75 ;
font-size: 10px;
font-weight: 500;

`
const TransactionAmountRed = styled.h4`
color: #A1474F;
font-size: 12px;
font-weight: 500;


`
const MoneyTypeRed = styled.h6`
color: #A1474F;
font-size: 10px;
font-weight: 500;
`

const CapContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const CapLeftContainer = styled.div``
const CapTitle = styled.h3`
color:#BDC5D9 ;
font-size: 14px;
font-weight: 600;
`
const CapRightContainer = styled.div``
const SeeButton = styled.button`
background-color: #1d2033;
color: #7B7F94;
display: block;
padding: 10px 30px 10px 5px; 
border-radius: 10px;
font-size: 10px;
`
const PairContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 15px;
`
const PairLeft = styled.div``
const PairLeftTitle = styled.h5`
color: #7B7F94;
font-size: 10px;
`
const PairMiddle = styled.div``
const PairMiddleTitle = styled.h5`
color: #7B7F94;
font-size: 10px;

`
const PairRight = styled.div``
const PairRightTitle = styled.h5`
color: #7B7F94;
font-size: 10px;


`
const StarContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 15px;
/* width: 95%; */
`
const StarLeft = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const StarImage = styled.img`
display: block;
width: 10px;
`
const StarType = styled.h5`
color: #7B7F94;
font-size: 10px;

`
const StarMiddle = styled.div`
`
const StarPrice = styled.h5`
font-size: 10px;
color: #459E75;
`
const StarPriceRed = styled.h5`
font-size: 10px;
color: #A1474F;

`
const StarRight = styled.div``
const StarPerc = styled.h5`
font-size: 10px;
color: #459E75;
`
const StarPercRed = styled.h5`
font-size: 10px;
color: #A1474F;
`

const DashboardRight = styled.div`
width:25%;
@media (max-width:980px){
    width:100%;
}


`
const RightTopContainer = styled.div`
background-color: #171B2C ;
padding: 20px;
border-radius: 8px;
`

const TopInsideTop = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 15px;

`
const InsideTopLeft = styled.div`
align-items: center;
`
const Amount = styled.h4`
color: #BDC5D9;
`
const InsideTopRight = styled.div`
display: flex;
align-items: center;

`
const CoinSpan = styled.span`
border-radius: 50%;
background-color: #111219;
width:25px ;
height: 25px;
display: flex;
justify-content:center;
align-items: center;
margin-right: 10px;

`
const TopInsideImage = styled.img`
display: block;
width: 15px;
height: 15px;

`
const RightTopMiddle = styled.div``
const MiddleTopInside = styled.div``
const TotalAmount = styled.h3`
color: #EE633C;
font-weight: 600;
margin-bottom: 10px;
`
const MiddleBottomInside = styled.div`
display: flex;
margin-bottom: 10px;
`
const DepositContainer = styled.div`
background-color: #1d2033;
border-radius: 8px;
display: flex;
margin-right: 10px;
align-items: center;
padding: 5px;

`
const DepositImage = styled.img`
display: block;
width: 15px;
height: 15px;
margin-right: 5px;
`
const Deposit = styled.h5`
width: 48%;
font-size: 10px;
color: #7B7F94;
word-wrap:break-word;


`
const WithdrawelContainer = styled.div`
background-color: #1d2033;
border-radius: 8px;
display: flex;
margin-right: 20px;
align-items: center;
padding: 5px;

`
const WithdrawImage = styled.img`
display: block;
width: 15px;
height: 15px;
margin-right: 5px;
`
const Withdraw = styled.h5`
width: 44%;
font-size: 10px;
color: #7B7F94;
word-wrap:break-word;
/* white-space: pre-line; */
`
const RightTopBottom = styled.div``
const TransactionTitle = styled.h5`
color: #BDC5D9;
font-weight: 600;
margin-bottom: 10px;
`
const BitCoinContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 10px;
border: 1px solid rgba(123, 127, 148,0.5);
border-left : none;
box-shadow: radial-gradient(red, green, blue) 1px 1px 1px 0px ;
margin-bottom: 10px;
border-radius: 8px;
border-bottom-left-radius :0;
border-top-left-radius :0;
`
const BitCoinLeftContainer = styled.div`
display: flex;
align-items: center;
box-shadow: rgb(23, 27, 44) -17px 26px 7px,
 rgb(23, 27, 44) -18px 10px 15px,
 rgb(23, 27, 44) -20px -15px 5px,
  rgb(23, 27, 44) 8px 32px 23px;


`
const BitcoinSpan = styled.span`
border-radius: 8px;
background-color: #111219;
width:25px ;
height: 25px;
display: flex;
justify-content:center;
align-items: center;


`

const BitcoinImage = styled.img`
width: 15px;
height: 15px;
display: block;

`
const BitCoinTitleContainer = styled.div`
margin-left: 10px;
`
const NameCoin = styled.h4`
font-size: 14px;
font-weight: 600;
color: #BDC5D9;
margin-bottom: 5px;

`
const NameCoinType = styled.h6`
font-size: 10px;
font-weight: 600;
text-align: center;
color: #BDC5D9;

`
const BitCoinRightContainer = styled.div``
const BitcoinAmount = styled.h4`
font-size: 14px;
font-weight: 600;
color: #BDC5D9;
margin-bottom: 5px;
`
const BitcoinTime = styled.h6`
font-size: 10px;
font-weight: 600;
text-align: center;
color: #BDC5D9;
`
const RightBottomSection = styled.div`
background-color: #171B2C ;
margin-top: 50px;
padding: 20px;
border-radius: 8px;
@media (max-width:480px) {
margin: 20px 0 20px;

    
}
`
const RightBottomInsideTop = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`
const LeftExchangeTitle = styled.h3`
color: #BDC5D9;
font-size: 14px;
font-weight: 400;
`
const RightSyncSpan = styled.span`
justify-content: center;
align-items: center;
display: flex;
background-color: rgb(29, 32, 51);
border-radius: 50%;
width: 25px;
height: 25px;
`
const RightSyncImage = styled.img`
display: block;
width: 10px;
height: 10px;
`
const RightBottomInsideMiddle = styled.div`
margin-top: 20px;
`
const SaleName = styled.h3`
color: #76829B;
font-size: 12px;
margin-bottom: 10px;

`
const SaleContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid rgba(123, 127, 148,0.5);
/* box-shadow:  rgba(118, 130, 155, 0.5) 1px 0px 2px; */
padding: 10px;
border-radius: 8px;
border-bottom-left-radius:0;
border-top-left-radius:0;
margin-bottom: 20px;
border-left: 0;
`
const SaleAmount = styled.h4`
color: #BDC5D9;
font-size: 15px;
font-weight:600;
box-shadow: rgb(23, 27, 44) -17px 26px 7px,
 rgb(23, 27, 44) -18px 10px 15px,
 rgb(23, 27, 44) -20px -15px 5px,
  rgb(23, 27, 44) -1px 11px 23px;;
`

const CurrencyDropdown = styled.select`
color: #BDC5D9;

`
const Currency = styled.option`
color: #BDC5D9;
background-color: #171B2C ;
border-radius: 8px;


`
const SaleAmountRightContaner = styled.div``

const RightBottomSubmitButton = styled.button`
display: block;
width:100%;
color: #fff;
background-color: #20C866;
padding: 5px 0;
border-radius: 8px;
font-size: 12px;

`

const ChartContainer = styled.div`
width: 100%;

`



