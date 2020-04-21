import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import './button.scss'
import WidthLayout from '../../components/WidthLayout'

export default class Index extends React.Component {

  render() {
    return (
      <Layout>
        <WidthLayout>
          <div class="wrap">
            <div class="exp">
                <div class="checkbox">
                 <form>
                   <div>
                     <input type="checkbox" id="check" name="check" value="" />
                     <label for="check">
                       <span></span>Checkbox
                     </label>
                   </div>
                 </form>
              </div>
            </div>
          </div>
        </WidthLayout>
      </Layout>
    )
  }
}
