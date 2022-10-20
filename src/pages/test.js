import React from 'react'

export const Test = () => {
    return (
        <form
            method="POST"
            action="https://cp.selzy.com/en/subscribe?hash=61f6cpm5hy5gk9yhhn3kbwdtpnnwyuxw7exuukjmgin1tu4oautjo"
            name="subscribtion_form"
        >
            <div class="subscribe-form-item subscribe-form-item--text">
                Stay connected and subcribe to my email updates
            </div>
            <div class="subscribe-form-item subscribe-form-item--input-email">
                <label class="subscribe-form-item__label subscribe-form-item__label--input-email subscribe-form-item__label--required">
                    E-mail
                </label>
                <input
                    class="subscribe-form-item__control subscribe-form-item__control--input-email"
                    type="text"
                    name="email"
                    value=""
                />
            </div>
            <div class="subscribe-form-item subscribe-form-item--btn-submit">
                <input
                    class="subscribe-form-item__btn subscribe-form-item__btn--btn-submit"
                    type="submit"
                    value="Subscribe"
                />
            </div>
            <div class="subscribe-form-item subscribe-form-agreement-with-terms">
                <input
                    class="subscribe-form-item__control subscribe-form-agreement-with-terms--checkbox"
                    type="checkbox"
                />
                <span class="subscribe-form-agreement-with-terms--text">
                    <span
                        style={{
                            fontFamily: 'Arial,Helvetica,sans-serif',
                            fontSize: '12px',
                        }}
                    >
                        I agree with the privacy terms
                    </span>
                </span>
            </div>
            <div class="subscribe-form-item subscribe-form-item--img">
                <a
                    class="subscribe-form-item__link subscribe-form-item__link--img"
                    href="https://cp.selzy.com/en/v5/subscribe-form/edit"
                    target="_blank"
                >
                    <img
                        class="subscribe-form-item__img subscribe-form-item__img--img"
                        src="https://cp.selzy.com/en/user_file?resource=images&amp;user_id=5232953&amp;name=icon-512x512.png"
                        alt="Some Image"
                    />
                </a>
            </div>
            <input type="hidden" name="charset" value="UTF-8" />
            <input type="hidden" name="default_list_id" value="1" />
            <input type="hidden" name="overwrite" value="2" />
            <input type="hidden" name="is_v5" value="1" />
        </form>
    )
}

export default Test
