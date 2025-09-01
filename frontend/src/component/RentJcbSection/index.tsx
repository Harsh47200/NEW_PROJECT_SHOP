import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Button,
  Field,      // ✅ replace FormControl
  Input,
  Textarea,
  Select,
  VStack,
  Heading,
} from "@chakra-ui/react";
import scss from "./RentJcbSection.module.scss";

const RentJcb = () => {
  return (
    <section id="rentjcb" className={scss.rentjcb}>
      <div className={scss.rentjcb__container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={scss.rentjcb__formbox}
        >
          <Heading as="h2" size="xl" mb={6} textAlign="center">
            Rent a JCB Machine
          </Heading>

          <VStack spacing={4} align="stretch">
            <Field label="Name" required>
              <Input placeholder="Enter your name" />
            </Field>

            <Field label="Phone" required>
              <Input type="tel" placeholder="Enter phone number" />
            </Field>

            <Field label="Email">
              <Input type="email" placeholder="Enter email" />
            </Field>

            <Field label="Location">
              <Input placeholder="Enter site location" />
            </Field>

            <Field label="Required JCB Type">
              <Select placeholder="Select JCB Type">
                <option>Backhoe Loader</option>
                <option>Excavator</option>
                <option>Mini Digger</option>
                <option>Wheel Loader</option>
              </Select>
            </Field>

            <Field label="Date Required">
              <Input type="date" />
            </Field>

            <Field label="Message">
              <Textarea placeholder="Additional details..." />
            </Field>

            <motion.div whileTap={{ scale: 0.95 }}>
              <Button colorScheme="yellow" width="100%" size="lg">
                Submit Request
              </Button>
            </motion.div>
          </VStack>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={scss.rentjcb__gallery}
        >
          <Heading as="h3" size="lg" mb={4} textAlign="center">
            Our Work & Happy Clients
          </Heading>
          <div className={scss.rentjcb__images}>
            <img src="/images/jcb1.jpg" alt="Site work" />
            <img src="/images/jcb2.jpg" alt="Satisfied contractor" />
            <img src="/images/jcb3.jpg" alt="JCB on site" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RentJcb;
