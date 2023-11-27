import React from 'react'

const ViewDropdown = () => {
  return (
    <div className='flex flex-col justify-center align-middle items-center'>
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200 w-2/3">
            <div className="collapse-title text-xl font-medium">
              {/* top */}
              <div className='flex flex-row justify-center align-middle items-center text-lg font-mont'>
                {/* Location */}
                <div>
                  Milimani
                </div>

                {/* court */}
                <div>
                  High Court
                </div>

                {/* Case Number */}
                <div>
                  4846 of 2019
                </div>

                {/* Case Name */}
                <div>
                  Ecobank vs ABCD
                </div>
              </div>

              {/* bottom */}
              <div className='flex flex-row justify-between align-middle items-center text-lm font-tinos'>
                {/* department */}
                <div>
                  Civil
                </div>

                {/* Status */}
                <div className='text-accent font-bold'>
                  Active
                </div>
              </div>

            </div>
            <div className="collapse-content"> 
              {/* Top */}
              <div className='font-mont text-sx pb-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a porttitor sem. Vestibulum nec fringilla augue. Cras hendrerit quam eu varius pretium. Ut vel enim volutpat lectus tincidunt pulvinar. Nunc molestie lectus in ante posuere efficitur. Praesent diam erat, dictum eu mi in, efficitur imperdiet turpis. Fusce porttitor euismod justo, sit amet elementum est tincidunt eu. Curabitur magna neque, semper vel sodales at, imperdiet nec ipsum.
                Proin eleifend arcu a mauris viverra porta. Donec placerat, sem sed posuere tempor, tortor risus tincidunt elit, et elementum diam mauris a augue. Sed lacinia sit amet tellus placerat hendrerit. In elementum tempor tortor sed egestas. In a ipsum non felis sodales euismod laoreet sit amet urna. Integer sit amet molestie lorem, sit amet posuere metus. Sed id turpis id arcu consequat consequat. Donec in semper augue. Donec pulvinar velit a urna sollicitudin pharetra. Sed dictum dolor sit amet purus suscipit, dictum malesuada ligula imperdiet. Ut condimentum est eget gravida laoreet.
              </div>

              {/* Bottom */}
              <div className='font-mont text-sx'>
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr className='text-lm text-accent'>
                        <th></th>
                        <th></th>
                        <th>Last Activity</th>
                        <th>Next Activity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      <tr className="bg-base-200">
                        <th className='text-accent'>1</th>
                        <td>Hearing Date</td>
                        <td>23/11/2023</td>
                        <td>23/02/2024</td>
                      </tr>
                      {/* row 2 */}
                      <tr>
                        <th className='text-accent'>2</th>
                        <td>Judgement Date</td>
                        <td></td>
                        <td>25/03/2024</td>
                      </tr>
                      {/* row 3 */}
                      <tr>
                        <th className='text-accent'>3</th>
                        <td>Submission Date</td>
                        <td>20/11/2023</td>
                        <td></td>
                      </tr>
                      {/* row 4 */}
                      <tr>
                        <th className='text-accent'>4</th>
                        <td>Mention Date</td>
                        <td>15/12/2023</td>
                        <td>25/03/2024</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ViewDropdown