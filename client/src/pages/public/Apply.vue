<template>
<div>

   <nav class="navbar navbar-dark navbar-expand-sm bg-primary sticky-top p-0" >

      <a class="navbar-brand col-md-5 col-lg-3 mr-0" href="/">
        TS NODE STARTER
      </a>

    <!-- <div class="w-100"></div> -->

  </nav>
  <page>

  <b-card class="mb-2 mt-4">
    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-select
          :label="'What residence are you applying for? (LISTINGS DROPDOWN)'"
        ></willow-select>
      </b-col>
    </b-row>

    <h3>Application Information</h3>
    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Email'"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'First Name'"
          heading
        ></willow-textfield>
      </b-col>
      <b-col :cols="12">
        <willow-textfield
          :label="'Last'"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Birth date'"
          heading
        ></willow-textfield>
      </b-col>

      <b-col :cols="12">
        <willow-textfield
          :label="'SSN'"
          heading
        ></willow-textfield>
      </b-col>

    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Phone'"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>
<br>
    <h3>Rental History</h3>

  <h5>Current Residence</h5>
    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Current Street'"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'City'"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'State'"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Zip'"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Owner Name'"
          heading
        ></willow-textfield>
      </b-col>

      <b-col :cols="12">
        <willow-textfield
          :label="'Owner Phone'"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Date From'"
          heading
        ></willow-textfield>
      </b-col>

      <b-col :cols="12">
        <willow-textfield
          :label="'To'"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="24">
        <willow-textfield
          :label="'Reason for moving'"
          heading
        ></willow-textfield>
      </b-col>

    </b-row>

  <h5>Prior</h5>
    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Prior Street'"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'City'"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'State'"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Zip'"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Owner Name'"
          heading
        ></willow-textfield>
      </b-col>

      <b-col :cols="12">
        <willow-textfield
          :label="'Owner Phone'"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Date From'"
          heading
        ></willow-textfield>
      </b-col>

      <b-col :cols="12">
        <willow-textfield
          :label="'To'"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>
    <br>
    <h3>Employment</h3>

  <h5>Current employment</h5>
    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Current Employer'"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Occupation'"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Supervisor Name'"
          heading
        ></willow-textfield>
      </b-col>

      <b-col :cols="12">
        <willow-textfield
          :label="'Supervisor Phone'"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Date From'"
          heading
        ></willow-textfield>
      </b-col>

      <b-col :cols="12">
        <willow-textfield
          :label="'To'"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'MonthlySalary'"
          heading
        ></willow-textfield>
      </b-col>

    </b-row>

    <h3>General</h3>

    <b-form-group>
      <p>Do you smoke?</p>
      <b-form-radio id="checkbox1"  value="accepted" unchecked-value="not_accepted">Yes</b-form-radio>
      <b-form-radio id="checkbox1"  value="accepted" unchecked-value="not_accepted">No</b-form-radio>
    </b-form-group>

    <b-form-group>
      <p>Do you have pets?</p>
      <b-form-radio id="checkbox1"  value="accepted" unchecked-value="not_accepted">Yes</b-form-radio>
      <b-form-radio id="checkbox1"  value="accepted" unchecked-value="not_accepted">No</b-form-radio>
    </b-form-group>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'If you have a pet what breed?'"
        ></willow-textfield>
      </b-col>

      <b-col :cols="12">
        <willow-textfield
          :label="'Weight'"
        ></willow-textfield>
      </b-col>

    </b-row>

    <b-form-group>
      <p>Have you ever been late on rent?</p>
      <b-form-radio id="checkbox1"  value="accepted" unchecked-value="not_accepted">Yes</b-form-radio>
      <b-form-radio id="checkbox1"  value="accepted" unchecked-value="not_accepted">No</b-form-radio>
    </b-form-group>

    <b-form-group>
      <p>Have you ever been party to a lawsuit? </p>
      <b-form-radio id="checkbox1"  value="accepted" unchecked-value="not_accepted">Yes</b-form-radio>
      <b-form-radio id="checkbox1"  value="accepted" unchecked-value="not_accepted">No</b-form-radio>
    </b-form-group>

    <b-row class="mb-2">
      <b-col :cols="24">
        <willow-textfield
          :label="'If yes to any of the above, explain.'"
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="24">
        <willow-textfield
          :label="'Is there anything negative in your credit or background check you want to comment on? '"
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-form-group>
      <p><strong>I have read, understand, and agreed to the terms and conditions</strong></p>
      <b-form-radio id="checkbox1"  value="accepted" unchecked-value="not_accepted">Yes</b-form-radio>
      <b-form-radio id="checkbox1"  value="accepted" unchecked-value="not_accepted">No</b-form-radio>
    </b-form-group>
    <p><strong>Terms and conditions:</strong><br>
        I understand that this is a routine application to establish credit, character, employment, and
        rental history. I also understand that this is NOT an agreement to rent and that all applications
        must be approved. I authorize verification of references given. I declare that the statements
        above are true and correct, and I agree that the landlord may terminate my agreement entered
          into in reliance on any misstatement made above.
    </p>
    <b-row class="mb-2">
      <b-col :cols="24">
        <willow-textfield
          :label="'Type name here as an ESignature'"
          heading
        ></willow-textfield>
      </b-col>

    </b-row>

  </b-card>

  </page>
</div>
</template>

<script>
export default {}
</script>

<style>
  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}
</style>
