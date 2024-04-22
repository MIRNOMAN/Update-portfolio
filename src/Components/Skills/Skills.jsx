

const Skills = () => {
    return (
        <section className="md:px-32 mt-10">
            <div className="text-center mt-5">
                <h1 className="text-3xl poppins-bold-italic">Skills</h1>
                <h3 className="mt-1">My Technical level</h3>
            </div>

            <div className="md:flex md:gap-10 mt-16">
                <div className="md:w-1/2 p-4">
                    <h3 className="text-center text-xl font-semibold mb-7">Technical Skills</h3>
                    <div className="each-skills ">
                        <div className="candidatos">
                            <div className="parcial">
                                <div className="info">
                                    <div className="nome mt-3">Javascript</div>
                                    <div className="custom-progress mt-2">
                                        <div className="progress-bar" data-value="10"></div>
                                    </div>
                                </div>
    
                            </div>
                        </div>

                        <div className="candidatos">
                            <div className="parcial">
                                <div className="info">
                                    <div className="nome mt-3">Node.js</div>
                                    <div className="custom-progress mt-2">
                                        <div className="progress-bar-node" data-value="10"></div>
                                    </div>
                                </div>
                              
                            </div>
                        </div>

                        <div className="candidatos">
                            <div className="parcial">
                                <div className="info">
                                    <div className="nome mt-3">Express.js</div>
                                    <div className="custom-progress mt-2">
                                        <div className="progress-bar-express" data-value="10"></div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div className="candidatos">
                            <div className="parcial">
                                <div className="info">
                                    <div className="nome mt-3">React.js</div>
                                    <div className="custom-progress mt-2">
                                        <div className="progress-bar-react" data-value="10"></div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>

                        <div className="candidatos">
                            <div className="parcial">
                                <div className="info">
                                    <div className="nome mt-3">MongoDB</div>
                                    <div className="custom-progress mt-2">
                                        <div className="progress-bar-MongoDB" data-value="10"></div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div className="candidatos">
                            <div className="parcial">
                                <div className="info">
                                    <div className="nome mt-3">Mongoose</div>
                                    <div className="custom-progress mt-2">
                                        <div className="progress-bar-Mongoose" data-value="10"></div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div className="candidatos">
                            <div className="parcial">
                                <div className="info">
                                    <div className="nome mt-3">Next js</div>
                                    <div className="custom-progress mt-2">
                                        <div className="progress-bar-Next" data-value="10"></div>
                                    </div>
                                </div>
                              
                            </div>
                        </div>

                        <div className="candidatos">
                            <div className="parcial">
                                <div className="info">
                                    <div className="nome mt-3">Redux</div>
                                    <div className="custom-progress mt-2">
                                        <div className="progress-bar-Redux" data-value="10"></div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 ">
                    <h3 className="text-center text-xl font-semibold mb-7">Professional Skills</h3>
                    <div className="mh-professional-skills">


                        <div className="grid grid-cols-2 md:gap-10 md:flex-1 ">
                            {/* 1st progress */}
                            <div className="text-center">
                                <div>
                                    <h1 className="font-medium">Communication</h1>
                                </div>
                                <div>
                                    {/* 1st progress */}
                                    <div className="circle-wrap">

                                        <div className="circle">

                                            {/* 1st part */}
                                            <div className="mask full-1">
                                                <div className="fill-1"></div>
                                            </div>
                                            {/* 2nd part */}
                                            <div className="mask half">
                                                <div className="fill-1"></div>
                                            </div>


                                            <div className="inside-circle text-white">85%</div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 2nd progress */}
                            <div className="text-center">
                                <div>
                                    <h1 className="font-medium">Teamwork</h1>
                                </div>
                                <div>
                                    {/* 1st progress */}
                                    {/* 2st progress */}
                                    <div className="circle-wrap">
                                        <div className="circle">
                                            {/* 1st part */}
                                            <div className="mask full-2">
                                                <div className="fill-2"></div>
                                            </div>
                                            {/* 2nd part */}
                                            <div className="mask half">
                                                <div className="fill-2"></div>
                                            </div>
                                            <div className="inside-circle text-white">75%</div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* 3rd progress */}
                            <div className="text-center">
                                <div>
                                    <h1 className="font-medium">Problem Solving</h1>
                                </div>
                                <div>

                                    {/* 3st progress */}
                                    <div className="circle-wrap">
                                        <div className="circle">
                                            {/* 1st part */}
                                            <div className="mask full-3">
                                                <div className="fill-3"></div>
                                            </div>
                                            {/* 2nd part */}
                                            <div className="mask half">
                                                <div className="fill-3"></div>
                                            </div>
                                            <div className="inside-circle text-white">80%</div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            {/* 4st progress */}

                            <div className="text-center">
                                <div>
                                    <h1 className="font-medium">Creativity</h1>
                                </div>
                                <div>

                                    {/* 3st progress */}
                                    <div className="circle-wrap">
                                        <div className="circle">
                                            {/* 1st part */}
                                            <div className="mask full-4">
                                                <div className="fill-4"></div>
                                            </div>
                                            {/* 2nd part */}
                                            <div className="mask half">
                                                <div className="fill-4"></div>
                                            </div>
                                            <div className="inside-circle text-white">70%</div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills