import React, { useState } from "react"
import styles from "./styles.module.css"


export const ShowCompanyLogos = () => {

return(


          <section className={styles.used_by}>
            <div
              className="container"
              style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}
            >
              {/* <p class="tagline" >Used by teams at</p> */}
              <p className={styles.tagline}> Used by teams at </p>
              <ul>
                <li>
                  <img src="img/users/phenom.png" alt="phenom logo" />
                </li>
                <li>
                  <img src="img/users/epifi.jpeg" alt="epifi logo" />
                </li>
                <li>
                  <img src="img/users/Outplay.webp" alt="outplay logo" />
                </li>
                <li>
                  <img src="img/users/instasafe-cropped.png" alt="instasafe logo" />
                </li>
                <li>
                  <img
                    src="img/users/turvo-logo-white.png"
                    alt="turvo logo"
                  />
                </li>
              </ul>
            </div>
          </section>

)
}