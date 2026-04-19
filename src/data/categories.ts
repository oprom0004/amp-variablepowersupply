/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CategoryData } from '../types';

export const CATEGORIES: CategoryData[] = [
  {
    slug: 'variable-dc-power-supply',
    name: 'Variable DC Power Supply',
    url: 'https://variabledcpowersupply.com/',
    description: 'High-precision variable DC power supply systems with adjustable voltage and current regulation for mission-critical laboratory testing.',
    techSummary: 'This variable DC power supply series integrates switching efficiency with linear-grade output stability. Designed for semiconductor validation where low ripple/noise and rapid transient response are essential benchmarks.',
    safetyLogic: 'Redundant Over-Voltage Protection (OVP) and CV/CC auto-crossover logic ensuring safe operation during dynamic load variations.',
    useCases: ['Semiconductor Reliability Testing', 'DC Motor Characterization', 'Advanced R&D Fabrication'],
    protocols: ['SCPI commands', 'Analog Programming', 'Local Interface'],
    engineeringInsights: `The technology behind a modern variable DC power supply involves a sophisticated balance of power density and signal integrity. Our core series utilizing 'Switching-Linear Hybrid' regulation delivers the rapid transient response associated with linear supplies while maintaining the high efficiency of a switching DC source. 

    From a technical perspective, a high-quality variable power source must manage the 'Total Harmonic Distortion' (THD) on its output rails. By integrating active EMI shielding and multi-stage output inductor filters, we ensure that the DC output remains a clean reference for sensitive ADC characterization and high-speed communication testing.`,
    applicationBrief: `A variable DC power supply is the central nerve center of any professional engineering lab. Whether you are validating a new IoT chipset or simulating a 12V automotive battery profile, the ability to precisely adjust voltage and current limits is what prevents expensive prototype failures. Our universal variable sources are currently deployed in thousands of centers globally, from Silicon Valley R&D firms to industrial automation floors.`,
    physicalSpecs: {
      cooling: 'Intelligent Variable Speed Fan',
      interface: 'Professional Binding Posts',
      formFactor: 'Benchtop / Rack-Mountable'
    },
  },
  {
    slug: '800v-variable-power-supply',
    name: '800V Variable Power Supply',
    url: 'https://variabledcpowersupply.com/800v-dc-power-supplies/',
    description: 'Specialized 800V adjustable power supply systems for EV battery pack testing and high-voltage renewable energy research.',
    techSummary: 'Utilizing a high-frequency switching topology, this 800V variable power supply delivers superior power density and DC regulation. Perfect for simulated high-tension environments requiring programmable profiles.',
    safetyLogic: 'Galvanic isolation rated to 3KV. Integrated active discharge circuitry ensures safety by purging residual voltage post-operation.',
    useCases: ['EV Inverter Validation', 'Solar Grid Simulation', 'High-Tension Insulation Analysis'],
    protocols: ['RS485 / RS232', 'CAN Bus (Optional)', 'LAN (LXI)'],
    engineeringInsights: `The architecture of our 800V variable power supply is optimized for the rigorous demands of Electric Vehicle (EV) drivetrain validation. By employing a wide-bandgap semiconductor topology, these units achieve a transient recovery time of less than 200 microseconds even during rapid 10% to 90% load steps. 
    
    In the context of 800V Adjustable DC Power, EMI suppression is paramount. Our engineering team has integrated three-stage capacitive filtering and high-frequency common-mode chokes to ensure that the variable output remains silent enough for ultra-sensitive telemetry systems used in battery management system (BMS) stress testing. 
    
    For engineers operating in high-tension environments, this variable power source includes a zero-overshoot soft-start algorithm. This prevents catastrophic inrush current spikes when initializing power to high-capacitance DUTs, a common point of failure in standard laboratory power sources.`,
    applicationBrief: `At the 800V threshold, a variable DC power supply becomes the cornerstone of next-generation renewable energy research. Specifically, in solar inverter development, our 800V variable units simulate the high-voltage strings required for MPPT (Maximum Power Point Tracking) calibration. The precision regulation allows for the simulation of varying irradiance levels with sub-second response times, ensuring a robust test-bed for mission-critical power electronics.`,
    physicalSpecs: {
      cooling: 'Smart Tunnel Airflow System',
      interface: 'Custom High-HV Terminals',
      formFactor: 'Industrial 19" 3U Chassis'
    },
    faqs: [
      {
        q: "Why is 800V classification critical for modern EV testing?",
        a: "Next-generation Electric Vehicles utilize 800V architectures to enable faster charging and higher efficiency. An 800V variable power supply is essential to simulate battery pack behavior and test drivetrain inverters under full-load conditions."
      },
      {
        q: "Does this 800V unit support regenerative loading?",
        a: "While this is a source-only variable power supply, it features active reverse-EMF protection. For full-cycle battery testing involving discharge, we recommend pairing this with our high-power electronic loads."
      },
      {
        q: "What safety interlocks are required for 800V operation?",
        a: "Safe operation at 800V requires external interlock loops, insulated terminal covers, and high-voltage warning beacons. Our system includes a physical interlock port that disables output if the test cage door is opened."
      }
    ],
  },
  {
    slug: '600v-variable-power-supply',
    name: '600V Variable Power Supply',
    url: 'https://variabledcpowersupply.com/600v-dc-power-supplies/',
    description: 'Precision 600V DC power sources for rigorous industrial applications and high-voltage component evaluation.',
    techSummary: 'Engineered for low-ripple performance in high-voltage environments. The 600V series maintains +/- 0.05% regulation accuracy across its full output range.',
    safetyLogic: 'Independent hardware-level OVP and OCP. Integrated temperature sensing with emergency thermal shutdown.',
    useCases: ['Photovoltaic Inverter Testing', 'Capacitor Burn-in', 'Laser Diode Array Power'],
    protocols: ['LXI Standard', 'USB', 'LAN'],
    engineeringInsights: `The 600V variable power supply series leverages a dual-loop control system, prioritizing loop stability across both constant-voltage (CV) and constant-current (CC) operating modes. For industrial burn-in processes, the 600V adjustable output maintains a drift coefficient of less than 0.05% over an 8-hour continuous deployment. 

    Thermal management is facilitated by an intelligent tunnel airflow design, which only scales fan RPM as the internal heat-sink temperature approaches critical thresholds. This ensures that the variable source is as quiet as possible during low-current measurement cycles while providing full-rated stability at 600 volts during high-stress insulation analysis.`,
    applicationBrief: `Engineered for the capacitor manufacturing industry, the 600V variable power supply is the industry benchmark for high-voltage dielectric burn-in. Its ability to provide fine current-limit adjustment allows for the precise detection of leakage currents in ceramic and electrolytic capacitors before full-scale deployment in aerospace radar systems.`,
    physicalSpecs: {
      cooling: 'High-Flow Intelligent Fan',
      interface: 'Rear-Panel Terminal Block',
      formFactor: '19" Rack Mount (2U)'
    },
    faqs: [
      {
        q: "How do you achieve <50mV ripple at 600V DC?",
        a: "Our 600V variable power supply utilizes a multi-stage filtering topology and high-frequency soft-switching to minimize switching noise while maintaining high voltage throughput."
      }
    ]
  },
  {
    slug: '500v-variable-power-supply',
    name: '500V Variable Power Supply',
    url: 'https://variabledcpowersupply.com/500v-dc-power-supplies/',
    description: 'Efficient 500V variable DC power systems providing high accuracy for industrial manufacturing.',
    techSummary: 'Optimized for high-duty cycle operations in automated test environments. Features 4-digit precision for both voltage and current monitoring.',
    safetyLogic: 'Step-limited current control and soft-start voltage ramping to prevent load inrush damage.',
    useCases: ['Industrial Automation', 'Aerospace Component Testing', 'LED Driver Evaluation'],
    protocols: ['Analog Programming', 'RS232'],
    engineeringInsights: `The 500V variable power supply is engineered for the specific requirements of the aerospace electronics sector. Featuring a high-voltage isolation transformer and a fast-discharge output circuit, it ensures that your Device Under Test (DUT) is safely de-energized immediately after a 500V test run. 

    Our 500V adjustable units utilize a proprietary 'Step-Safe' ramp-up logic, which allows technicians to define the voltage incline rate down to 10 volts per second. This is critical for testing delicate piezoelectric actuators and high-voltage motor windings where a sudden 500V transient could cause dielectric breakdown.`,
    applicationBrief: `In industrial manufacturing, the 500V DC power source is commonly used for motor winding insulation testing and aircraft power system simulation. Its robust construction ensures reliable performance in non-climate controlled factory floors and modular ATE assembly lines.`,
    physicalSpecs: {
      cooling: 'Forced Air Stability System',
      interface: 'Safety Binding Posts',
      formFactor: 'Benchtop / Rack Hybrid'
    },
    faqs: [
      {
        q: "What is the programming resolution for 500V units?",
        a: "The standard 500V series offers 100mV programming resolution. For applications requiring higher precision, our 'P' series enables down to 10mV increments."
      }
    ]
  },
  {
    slug: '400v-variable-power-supply',
    name: '400V Variable Power Supply',
    url: 'https://variabledcpowersupply.com/400v-dc-power-supplies/',
    description: 'Adaptable 400V DC power supplies for testing industrial motors and power electronics.',
    techSummary: 'The 400V series balances high power density with surgical output control. Ideal for applications requiring rapid power-on/off sequences.',
    safetyLogic: 'Output short-circuit prevention and constant-current limiters with active status feedback.',
    useCases: ['Solar Panel Simulation', 'Electric Motor Drivers', 'High-Power LED Testing'],
    protocols: ['GPIB (HPIB)', 'USB', 'RS485'],
    engineeringInsights: `The 400V variable power supply range features active current-sharing and low-inductance output terminals. Optimized for power electronics development, these 400V adjustable units provide the stability needed for IGBT and MOSFET characterization under real-world bus-voltage conditions. 

    A key engineering feature of the 400V series is the adjustable OVP (Over-Voltage Protection) which is implemented in hardware rather than software. This ensures a response time of less than 10 microseconds, providing an impenetrable shield for your sensitive DC-to-DC converters and solar inverter prototypes.`,
    applicationBrief: `Standard for solar panel simulation and EV inverter research, the 400V programmable power supply provides the 380V-420V DC rails required for validating industrial motor drives and high-efficiency power stages in renewable energy systems.`,
  },
  {
    slug: '300v-variable-power-supply',
    name: '300V Variable Power Supply',
    url: 'https://variabledcpowersupply.com/dc-power-supply-300v-list/',
    description: 'Range of 300V variable power supplies tailored for electronic design and quality control.',
    techSummary: 'Wide-range input support with active Power Factor Correction (PFC). Delivers ultra-stable DC with minimal electromagnetic interference (EMI).',
    safetyLogic: 'Real-time load isolation and non-volatile memory for safe state restoration after power cycles.',
    useCases: ['SMPS Testing', 'Circuit Breaker Timing', 'Airlines Avionics Repair'],
    protocols: ['RS232', 'LAN', 'Analog 0-5V/0-10V'],
    engineeringInsights: `The 300V variable power supply series is engineered with active Power Factor Correction (PFC) to ensure compliance with global EMI standards. Specifically designed for avionics repair and SMPS development, these units offer a low-noise DC output with ultra-tight regulation. 

    At 300V, transient response to load changes is a critical metric. Our design utilizes high-speed feedback loops that stabilize the output voltage within 500 microseconds of a 50% load step, making it the preferred choice for simulating AC-to-DC rectification stages in power converters.`,
    applicationBrief: `Ideal for the aerospace sector, the 300V adjustable power supply serves as the primary source for testing aircraft cockpit instrumentation and radar power rails. Its ability to provide stable 115V or 270V DC equivalent outputs makes it an essential tool for avionics ground support and qualification testing.`,
    physicalSpecs: {
      cooling: 'Variable Speed Fan Control',
      interface: 'Universal Connector Block',
      formFactor: 'Compact Desktop Series'
    },
  },
  {
    slug: '250v-variable-power-supply',
    name: '250V Variable Power Supply',
    url: 'https://variabledcpowersupply.com/250v-dc-power-supplies/',
    description: 'High-performance 250V DC power solutions combining compact design with precise regulation.',
    techSummary: 'Hybrid regulation architecture: combining switching efficiency with linear-grade output stability for high-precision 250V applications.',
    safetyLogic: 'Front-panel emergency stop and output lockout password to prevent unauthorized setting changes.',
    useCases: ['Precision Laboratory Research', 'Relay Life-cycle Testing', 'Medical Component Design'],
    protocols: ['Modbus RTU', 'USB Type-B'],
    engineeringInsights: `Operating at the 250V threshold, a variable DC power supply requires exceptional dielectric isolation between the input and output stages. Our 250V adjustable series uses reinforced opto-couplers and planar transformers to ensure a working isolation voltage of up to 2000V. 

    The control loop for these 250V units is optimized for high-voltage stability, specifically addressing the capacitive loading issues often found in telecommunications testing. With a drift rate of less than 10mV over an 8-hour shift, this variable power source provides the steady reference needed for long-term reliability analysis of HV relays and DC distribution components.`,
    applicationBrief: `The 250V variable power supply is a critical tool for engineers working on industrial DC-to-DC converters. It provides the high-voltage headroom necessary to test input-range limits and efficiency curves, ensuring that power modules can withstand the voltage spikes common in harsh industrial power environments.`,
    physicalSpecs: {
      cooling: 'Active Thermal Management',
      interface: 'Screw Terminal Outputs',
      formFactor: 'Industrial Module'
    },
  },
  {
    slug: '240v-variable-power-supply',
    name: '240V Variable Power Supply',
    url: 'https://variabledcpowersupply.com/250v-dc-power-supplies/',
    description: 'Specific 240V variable power supplies designed for high-power requirements in lab settings.',
    techSummary: 'Continuous and stable power delivery with low thermal noise. Fine resolution adjustment allows for 10mV set-point accuracy.',
    safetyLogic: 'Smart fan cooling logic adjusts to load temperature to prevent overheating while minimizing acoustic noise.',
    useCases: ['Domestic Appliance Testing (High Voltage)', 'DC Distribution Research', 'HVAC Controller Analysis'],
    protocols: ['Built-in Web Server', 'RS232'],
    engineeringInsights: `At 240V DC, a variable power supply mimics the rectified DC rail found in many industrial motor controllers and white-goods power stages. Our 240V adjustable units are designed with a 'Fast-Discharge' circuit, which automatically bleeds down the output capacitor bank in less than 2 seconds when the output is disabled. 

    This safety-first engineering is crucial for manual testing environments where technicians must frequently swap connections to the Device Under Test. The 240V variable series also features an 'Advanced Cooling' logic that monitors the temperatures of the power-stage IGBTs, ensuring long-term duty cycle reliability without the noise of a constant high-speed fan.`,
    applicationBrief: `Developed for the household appliance and HVAC industries, the 240V variable power supply enables engineers to simulate global power grid fluctuations. By precisely adjusting the DC rail, you can validate the performance of variable-frequency drives (VFDs) and compressor controllers under extreme under-voltage or over-voltage conditions.`,
    physicalSpecs: {
      cooling: 'Dual-Fan Crossflow',
      interface: 'High-V Safety Terminals',
      formFactor: 'Compact 2U Rack'
    },
    faqs: [
      {
        q: "Is 240V safe for standard laboratory benches?",
        a: "Our 240V variable power supply includes protective terminal covers and a safe-start logic that defaults to 0V. We recommend using insulated bench mats when exceeding 60V DC."
      }
    ]
  },
  {
    slug: '150v-variable-power-supply',
    name: '150V Variable Power Supply',
    url: 'https://variabledcpowersupply.com/150v-dc-power-supplies/',
    description: 'Mid-range voltage DC power units offering excellent stability for electronic testing.',
    techSummary: 'Optimized for high-precision current measurements at a 150V threshold. Features ultra-low noise floor for sensitive measurements.',
    safetyLogic: 'Multi-stage output filtering and transient suppression circuits protect downstream low-impedance loads.',
    useCases: ['Audio Amplifier Characterization', 'DC Distribution Bus Test', 'Automotive Sensor Power'],
    protocols: ['USB', 'Analog Interface'],
    engineeringInsights: `The 150V variable power supply occupies a critical 'sweet spot' for audio engineering and solar micro-inverter research. Our 150V units feature ultra-low common-mode noise, which is essential when characterizing high-voltage operational amplifiers or audio power stages that require a high-voltage, low-noise DC rail. 

    To maintain precision at 150V, we utilize high-stability metal-film resistors in the voltage-divider feedback network, resulting in a temperature coefficient of just 50ppm/°C. This ensures that the adjustable 150V output remains rock-steady even as the ambient temperature in a production-line environment fluctuates throughout the day.`,
    applicationBrief: `For the specialized high-fidelity audio market, the 150V variable DC supply provides the 'quiet' power needed to measure the signal-to-noise ratio of tube-amplifiers and high-voltage FET circuits. Its ripple-free output ensures that the power source never becomes the limiting factor in your measurement chain.`,
  },
  {
    slug: '120v-variable-power-supply',
    name: '120V Variable Power Supply',
    url: 'https://variabledcpowersupply.com/variable-dc-power-supply-120v/',
    description: 'Standard 120V variable power supplies for educational labs and engineering benches.',
    techSummary: 'The 120V series is the industry workhorse for mixed-signal environments. Offers dual-range output for both voltage and current priority.',
    safetyLogic: 'Anti-spark contact technology and isolated output terminals compliant with IEC safety standards.',
    useCases: ['University Engineering Programs', 'Computer Hardware Testing', 'General Purpose Lab Power'],
    protocols: ['Local Control', 'RS232 (Optional)'],
    engineeringInsights: `The 120V variable power supply is the technical 'standard' for electronics laboratories worldwide. Our 120V adjustable units are designed with a dual-range architecture, allowing for high-resolution monitoring at both low and high voltage thresholds. 

    For educational and repair environments, safety is the primary engineering focus. The 120V variable source includes isolated front-panel binding posts and an earth-leakage detector. If a potential fault is detected between the output rails and the chassis ground, the unit executes an immediate emergency shutdown, preventing risk to the student or technician.`,
    applicationBrief: `Used across thousands of university labs and computer hardware repair shops, the 120V DC power supply is the go-to source for general-purpose board-level testing and DC distribution simulation. Its simplicity and reliability make it the most widely deployed unit in our global catalog.`,
  },
  {
    slug: '100v-variable-power-supply',
    name: '100V Variable Power Supply',
    url: 'https://variabledcpowersupply.com/100v-dc-power-supplies/',
    description: '100V DC power sources delivering reliable performance and digital accuracy.',
    techSummary: 'Precision digital control with rotary encoder data entry. Prevents accidental voltage excursions through set-point confirmation logic.',
    safetyLogic: 'Integrated reverse polarity protection and ground leakage detection for safer lab operation.',
    useCases: ['Robotics Development', 'Industrial Sensor Powering', 'Battery Management System (BMS) Calibration'],
    protocols: ['RS485', 'USB'],
    engineeringInsights: `Transitioning to 100V, a variable power supply encounters higher electrical stress on the output switching transistors. Our 100V adjustable units are built with 'Oversized-Transistor' arrays, which are de-rated to run at only 60% of their maximum capacity even at full output. 

    This conservative engineering approach drastically extends the lifespan of the variable source. Furthermore, the 100V series includes a 'Smart-Sense' feature that automatically detects and compensates for the voltage drop across long output cables, ensuring the 100V setpoint is delivered exactly at the load terminals, not just at the power supply's jacks.`,
    applicationBrief: `The 100V variable power supply is the primary choice for Battery Management System (BMS) developers. As many battery stacks for light electric vehicles (LEVs) and home energy storage operate near the 100V threshold, this adjustable unit provides the safe and precise charging voltage required for cycle-life validation.`,
  },
  {
    slug: '80v-variable-power-supply',
    name: '80V Variable Power Supply',
    url: 'https://variabledcpowersupply.com/80v-dc-power-supplies/',
    description: 'Efficient 80V variable DC power units, perfect for battery charging and circuit development.',
    techSummary: 'Advanced CC/CV (Constant Current / Constant Voltage) auto-crossover. Ensures seamless transitions during high-load battery charging.',
    safetyLogic: 'Adjustable OCP delayed-trigger to allow for initial inrush currents from capacitive loads.',
    useCases: ['Battery Charging Stations', 'Drone Power Management', 'Electrolysis Research'],
    protocols: ['Analog 0-10V', 'RS232'],
    engineeringInsights: `The 80V variable power supply range is specifically optimized for high-current discharge simulation and motor-drive validation. At 80V, our units utilize a 'Synchronous Rectification' topology, which reduces internal power loss by up to 20% compared to standard diode-based rectification. 

    This efficiency gain means the variable power source runs cooler, allowing for a more compact form factor. The 80V adjustable series also features a 'Digital-Lock' UI, preventing accidental voltage adjustments once a test sequence has started—a vital feature for long-term life-cycle testing of industrial actuators and DC blowers.`,
    applicationBrief: `Essential for the booming electric scooter and drone sectors, the 80V variable DC source provides the 48V-72V DC rails needed to test motor controllers and high-power ESCs (Electronic Speed Controllers). Its robust current limit logic prevents the unit from tripping even during the massive inrush currents seen during motor spool-up.`,
  },
  {
    slug: '60v-variable-power-supply',
    name: '60V Variable Power Supply',
    url: 'https://variabledcpowersupply.com/variable-dc-power-supply-60v/',
    description: 'Accurate 60V power supplies with low current noise for sensitive electronic component testing.',
    techSummary: 'Ultra-low ripple switching technology (<10mV rms). Provides laboratory-grade purity with the efficiency of switching supplies.',
    safetyLogic: 'Remote sense terminal compensation to eliminate voltage drops caused by long lead wires.',
    useCases: ['Telecommunications Testing', 'Embedded System Power', 'Low-Noise Sensor Development'],
    protocols: ['LAN / LXI', 'USB'],
    engineeringInsights: `For 60V variable power supply applications, the focus shifts to a balance of noise and power. Our 60V adjustable series features a 'Soft-Switching' L.L.C. resonant converter, which eliminates the sharp 'EMI-spikes' typical of cheaper switching units. 

    The result is a 60V output that is clean enough for powering high-intensity telecommunications modules and RF amplifiers. With built-in LAN/LXI support, this variable power source is easily integrated into automated racks for 24/7 reliability testing of networking hardware and broadband distribution equipment.`,
    applicationBrief: `Standard for 48V telecommunications infrastructure testing, the 60V variable power supply allows engineers to simulate the 'Float' and 'Equalize' voltage levels of a 48V battery backup system. Its remote-control capability makes it ideal for automated 'Margin-Testing' where the input voltage to a router is swept across its entire legal range.`,
  },
  {
    slug: '30v-variable-power-supply',
    name: '30V Variable Power Supply',
    url: 'https://variabledcpowersupply.com/variable-dc-power-supply-30v/',
    description: 'The benchtop standard: 30V adjustable DC power supplies for pros and students.',
    techSummary: 'Maximum versatility with standard 30V/5A or high-current configurations. Features high-visibility 4-digit LED displays for at-a-glance monitoring.',
    safetyLogic: 'User-definable power-on state (Last state or Off) for critical testing safety.',
    useCases: ['PCB Prototyping', 'Hobbyist Electronics', 'Repair Workshop Power'],
    protocols: ['Local Push-buttons', 'RS232 (Select models)'],
    engineeringInsights: `As the global standard for PCB development benches, the 30V 5A variable power supply utilizes a hybrid switching-linear architecture. This unique design provides the wide-range efficiency of a switching power source while incorporating a linear output stage to eliminate the common-mode noise and ripple typically associated with high-frequency adjustables. 

    The 30V variable series is particularly optimized for low-voltage digital circuits (1.8V to 5V), where voltage overshoot during power-on can permanently damage sensitive nanometer-scale transistors. Our active crowbar protection and voltage clamping logic ensure that the 30V output never exceeds the user-set threshold by more than 5mV during startup.`,
    applicationBrief: `The versatility of the 30V variable power supply makes it indispensable for electronics repair and education. From diagnosing shorted rails on a smartphone PCB to calibrating operational amplifiers in a university lab, the 30V adjustable DC source provides the granular current control necessary for surgical troubleshooting.`,
    physicalSpecs: {
      cooling: 'Low-Acoustic Variable Fan',
      interface: 'Safety Binding Posts & USB-A',
      formFactor: 'Compact Desktop Series'
    },
    faqs: [
      {
        q: "Why is 30V the industry standard for benchtop units?",
        a: "30V covers the vast majority of digital and analog rail requirements (1.8V, 3.3V, 5V, 12V, 24V). It's the most cost-effective range for general electronics development."
      }
    ]
  },
  {
    slug: '20v-variable-power-supply',
    name: '20V Variable Power Supply',
    url: 'https://variabledcpowersupply.com/20v-dc-power-supplies/',
    description: '20V variable power supplies specifically geared towards low-voltage digital work.',
    techSummary: 'Sub-millivolt resolution for delicate semiconductor research. Linear-stage post-regulation for the cleanest possible output.',
    safetyLogic: 'Zero-overshoot output on power-on to protect sensitive CMOS circuits.',
    useCases: ['FPGA Development', 'Nano-Electronic Research', 'Microcontroller Prototyping'],
    protocols: ['USB', 'Local Control'],
    engineeringInsights: `A 20V variable power supply is the 'precision scalpel' for nanometer-scale electronics. Dealing with 1.2V and 0.8V logic rails requires a variable source that can adjust in 1mV increments with zero overshoot. 

    Our 20V adjustable range uses an ultra-fast linear regulator stage that acts as a buffer between the dirty main power and your delicate FPGA or ASIC. By maintaining a ripple voltage of less than 300 microvolts (uV), this variable source ensures that your ground-bounce measurements are accurate and that your high-speed digital buses remain error-free during power-sequencing tests.`,
    applicationBrief: `The 20V variable power supply is a staple in semiconductor R&D and mobile device engineering. It provides the surgical precision required to characterize the efficiency of modern Power Management Integrated Circuits (PMICs) where every millivolt of accuracy directly translates to battery life in the final product.`,
  },
  {
    slug: '15v-variable-power-supply',
    name: '15V Variable Power Supply',
    url: 'https://variabledcpowersupply.com/15v-dc-power-supplies/',
    description: 'Precision 15V variable DC sources, frequently used for operational amplifier testing.',
    techSummary: 'Highly stable 15V output rail simulation. Dual tracking capability for symmetrical +/- power requirements.',
    safetyLogic: 'Isolation resistance >20MΩ at 500V DC. Fully floating outputs for versatile circuit grounding.',
    useCases: ['Analog Signal Conditioning', 'Audio Gear Design', 'Op-Amp Calibration'],
    protocols: ['Analog Tracking Control', 'Local'],
    engineeringInsights: `Precision 15V variable power supplies are the foundation of analog signal conditioning. Many operational amplifier (Op-Amp) and instrumentation circuits require a dual +/- 15V supply to function. Our 15V adjustable units are designed with 'Master-Slave' tracking, allowing you to link two units to provide a perfectly symmetrical dual-rail supply. 

    The noise floor at 15V is a critical metric for analog designers. Our 15V variable series utilizes toroidal transformers and low-drop-out (LDO) regulators to ensure that no 50/60Hz hum or high-frequency switching hash enters your measurement chain, allowing for the characterization of 24-bit ADCs and ultra-low noise audio pre-amps.`,
    applicationBrief: `Ideally suited for analog circuit prototyping and sensor calibration, the 15V variable power source is the choice of designers who cannot compromise on DC purity. Its compact size and isolated outputs make it the perfect companion for developing high-precision data acquisition systems and high-fidelity audio equipment.`,
  },
  {
    slug: '10a-variable-power-supply',
    name: '10A Variable Power Supply',
    url: 'https://variabledcpowersupply.com/10a-dc-power-supplies/',
    description: 'High-current variable DC power supplies capable of delivering up to 10 Amps for lab validation and engineering development.',
    techSummary: 'Designed for high dynamic current loads. Features large-scale heat dissipation and heavy-duty output terminals.',
    safetyLogic: 'Fold-back current limiting or Constant-Current modes with thermal protection interlocks.',
    useCases: ['Inductive Load Testing', 'DC Heater Powering', 'High-Power Transmitter Support'],
    protocols: ['RS485', 'Analog 4-20mA'],
    engineeringInsights: `Managing the thermal profile of a 10A variable DC power supply requires a focus on internal resistance and bus-bar efficiency. Our units employ oversized oxygen-free copper conductors to minimize voltage drops and heat generation at high current densities. 

    The current control logic features a 'Fold-back' limiting mode, which reduces the output current under short-circuit conditions to prevent damage to the internal power transistors (MOSFETs/IGBTs). This ensures long-term reliability in industrial environments where high-current inductive loads, such as solenoids or large DC motors, are frequently utilized.`,
    applicationBrief: `In the field of electrochemistry and electrolysis, the 10A adjustable current source provides the precision necessary for controlled plating and material synthesis. Its constant-current (CC) stability ensures that the reaction rate remains uniform, even as the internal resistance of the chemical cell changes over time.`,
    physicalSpecs: {
      cooling: 'Large-Scale Heat Dissipation',
      interface: 'Heavy-Duty Binding Posts',
      formFactor: 'Industrial Module'
    },
    faqs: [
      {
        q: "How do you manage heat in a 10A variable power supply?",
        a: "At high currents, internal resistance generates significant heat. Our 10A units use oversized copper bus-bars and intelligent forced-air cooling that scales with actual current draw, not just output voltage."
      },
      {
        q: "Can I use this 10A unit to charge high-capacity batteries?",
        a: "Yes. The CC (Constant Current) mode in our 10A variable power supply is rock-stable, allowing for precise charge current regulation. We include built-in reverse-current protection to prevent battery back-feed."
      },
      {
        q: "What is the recommended cable gauge for 10A DC delivery?",
        a: "To minimize voltage drop and fire risk, we recommend $12 AWG or thicker high-flex silicone wire. Using our remote sense terminals ensures the set voltage is maintained exactly at the load, compensating for wire resistance."
      }
    ],
  },
  {
    slug: '30a-variable-power-supply',
    name: '30A Variable Power Supply',
    url: 'https://variabledcpowersupply.com/variable-dc-power-supply-30a/',
    description: 'Industrial 30A variable DC power supplies for high-current development, validation, and burn-in tasks.',
    techSummary: 'High-current regulation architecture with fast transient response and stable CV/CC crossover under dynamic loads.',
    safetyLogic: 'Hardware OCP/OVP with thermal derating logic to protect both DUT and power stage during sustained 30A operation.',
    useCases: ['Battery Pack Development', 'Power Electronics Validation', 'Automated Burn-in Racks'],
    protocols: ['RS485', 'LAN (Selected)', 'Analog Programming'],
    engineeringInsights: `A 30A variable power supply must manage conductor losses, thermal rise, and transient current spikes with precision. Our 30A class uses low-impedance bus architecture and high-efficiency switching stages to maintain output stability during rapid load variation.

    For production and lab validation workflows, the control loop is tuned to reduce overshoot when stepping from light to heavy current regions. This improves repeatability in long-duration reliability testing and high-current converter characterization.`,
    applicationBrief: `The 30A variable DC platform is commonly used in EV sub-system testing, telecom power module qualification, and industrial controller burn-in. It provides the current headroom needed for realistic stress scenarios while preserving repeatable regulation accuracy.`,
    physicalSpecs: {
      cooling: 'High-Flow Smart Fan Control',
      interface: 'Reinforced High-Current Terminals',
      formFactor: 'Benchtop / Rack Hybrid'
    },
  },
  {
    slug: '60a-variable-power-supply',
    name: '60A Variable Power Supply',
    url: 'https://variabledcpowersupply.com/60a-dc-power-supplies/',
    description: 'Heavy-duty 60A variable power systems for extreme current demand in industrial and laboratory environments.',
    techSummary: 'Engineered for sustained high-current delivery with robust thermal design and low ripple regulation at load.',
    safetyLogic: 'Multi-stage protection with hardware OCP, short-circuit foldback, and temperature-triggered output control.',
    useCases: ['High-Power Motor Testing', 'Electrochemical Process Development', 'Large-System Burn-in'],
    protocols: ['CAN (Optional)', 'RS485', 'Remote Sense'],
    engineeringInsights: `At 60A output levels, cable resistance and connector integrity become dominant error sources. Our 60A variable platform prioritizes low-loss current paths, reinforced output terminals, and remote-sense compensation to keep voltage regulation accurate at the DUT.

    Thermal reliability is handled through multi-zone airflow and conservative derating behavior, allowing stable continuous operation in high-duty industrial scenarios where long test cycles are required.`,
    applicationBrief: `The 60A variable power category is used for high-current subsystem validation, heavy-load endurance testing, and advanced industrial prototyping where standard bench supplies cannot provide adequate current margin.`,
    physicalSpecs: {
      cooling: 'Multi-Zone Forced Air Cooling',
      interface: 'Heavy-Duty Bus-Bar / Terminal Output',
      formFactor: 'Industrial Rack Chassis'
    },
  },
  {
    slug: '1000w-variable-power-supply',
    name: '1000W Variable Power Supply',
    url: 'https://variabledcpowersupply.com/1000w-dc-power-supplies/',
    description: 'Robust 1000 Watt power systems designed for heavy-duty industrial loads.',
    techSummary: 'High-power density in a compact (2U/3U) footprint. Intelligent phase-shifting switching for maximum efficiency (>90%).',
    safetyLogic: 'Three-phase input detection and imbalance protection. Master-slave stacking capability with synchronous shutdown.',
    useCases: ['Server Rack Powering', 'Industrial Electroplating', 'High-Power Burn-in Racks'],
    protocols: ['Modbus TCP', 'CANopen', 'LAN'],
    engineeringInsights: `Our 1000W variable power supply series achieves a power density that is 25% higher than traditional rack units through the use of soft-switching resonant bridge topologies. This efficiency—exceeding 92%—not only reduces energy consumption but also significantly lowers the total heat dissipated into the server rack. 

    For large-scale deployments, these 1000W adjustable units feature a master-slave parallel bus. Up to 10 units can be synchronized to provide a 10kW system with perfectly balanced current sharing. This modularity allows system integrators to scale their testing power as the production requirements of high-performance computing (HPC) components increase.`,
    applicationBrief: `The 1000W programmable power source is a staple in semiconductor burn-in racks. By integrating LXI-compliant LAN interfaces, it allows for remote monitoring of voltage and current levels across hundreds of units simultaneously, making it ideal for large-scale quality assurance protocols in fabless manufacturing environments.`,
  },
  {
    slug: '0-30v-10a-variable-power-supply',
    name: '0-30V 10A Variable Power Supply',
    url: 'https://variabledcpowersupply.com/variable-switching-dc-bench-power-supply-30v-10a-etm-3010f/',
    description: 'High-current 30V adjustable power sources providing 10A output for demanding loads.',
    techSummary: 'Optimized for high-current delivery without sacrificing voltage stability. This 30V/10A variant is the preferred choice for DC motor and actuator testing.',
    safetyLogic: 'Active current-limiting and short-circuit protection with robust output diodes.',
    useCases: ['Motor Testing', 'LED Driver Development', 'High-current Rectification'],
    protocols: ['Local Interface', 'Analog Signal (Optional)'],
    engineeringInsights: `The 0-30V 10A variable power supply is the universal standard for high-current benchtop lab work. By providing 300W of total power in a compact enclosure, it serves as the primary driver for high-power DC motors, heavy-duty solenoid valves, and power-hungry LED arrays. 

    From a technical perspective, the ETM-3010F variant incorporates a high-efficiency switching regulator followed by a low-pass filter stage to keep ripple below 30mVp-p at full load. This makes it an ideal adjustable source for both industrial duty-cycles and precise electronic prototyping where current headroom is as important as voltage regulation.`,
    applicationBrief: `Used extensively in automotive DC motor testing and high-power LED driver validation, the 0-30V 10A variable power source provides the high-current stability required for charactering components under sustained 10-Amp load conditions.`,
    physicalSpecs: {
      cooling: 'Heavy-Duty Forced Cooling',
      interface: 'High-Current Binding Posts',
      formFactor: 'Benchtop High-Current Chassis'
    },
  },
  {
    slug: 'linear-variable-power-supply',
    name: 'Linear Variable Power Supply',
    url: 'https://variabledcpowersupply.com/linear-dc-power-supplies/',
    description: 'Ultra-low noise linear power supplies for precision R&D where ripple is critical.',
    techSummary: 'Zero switching noise. The linear series uses massive transformers and semiconductor regulators for the most "silent" power in the industry.',
    safetyLogic: 'Passive cooling options for zero-vibration / zero-acoustic noise lab environments.',
    useCases: ['High-Fidelity Audio Testing', 'RF Component Calibration', 'Medical Imaging Equipment Power'],
    protocols: ['Local Control Only', 'Analog 0-5V (Special Request)'],
    engineeringInsights: `The linear variable power supply remains the undisputed champion of DC purity. Unlike switching supplies that generate high-frequency pulses, a linear adjustable source uses a series-pass transistor to regulate voltage, resulting in an output ripple measured in microvolts (uV) rather than millivolts (mV). 

    The tradeoff for this purity is lower efficiency and increased weight due to the massive 50/60Hz isolation transformers. However, for RF laboratory work or medical imaging research, the lack of EMI and RFI interference is a non-negotiable requirement. Our linear units feature passive-cooled options, ensuring zero acoustic and vibration interference for the most delicate measurements.`,
    applicationBrief: `Specifically designed for the audio engineering and high-fidelity R&D communities, the linear variable DC supply is used to characterize pre-amplifiers and digital-to-analog converters (DACs). By providing a battery-clean power rail, it allows engineers to measure the true noise floor of their circuit without the 'switching hash' common in modern digital sources.`,
    physicalSpecs: {
      cooling: 'Passive Cooling Options',
      interface: 'Ultra-Pure Gold Plated Posts',
      formFactor: 'Clean-Room Desktop'
    },
    faqs: [
      {
        q: "What is the primary advantage of a Linear Variable Power Supply?",
        a: "Linear supplies eliminate high-frequency switching noise entirely. This results in a 'silent' DC output with nano-volt level ripple, making them the only choice for sensitive RF, medical, and audio R&D."
      },
      {
        q: "Why are linear units much heavier than switching ones?",
        a: "Linear variable power supplies rely on massive 50/60Hz transformers and large aluminum heatsinks for regulation. There are no switching transistors, only power-wasting pass elements that provide superior stability at the cost of weight."
      },
      {
        q: "Can a linear supply handle high-voltage inductive loads?",
        a: "While linear units are extremely clean, they are more sensitive to inductive kickback than switching supplies. Our linear series includes heavy-duty snubber circuits to protect the delicate regulation stage."
      }
    ],
  },
  {
    slug: 'high-precision-variable-power-supply',
    name: 'High Precision Variable Power Supply',
    url: 'https://variabledcpowersupply.com/high-precision-dc-power-supply/',
    description: 'Multi-digit displays and micro-step adjustments for the ultimate control accuracy.',
    techSummary: '24-bit AD/DA conversion for measurement and control. Accuracy levels reaching 0.1mV / 0.1mA resolution.',
    safetyLogic: 'Lockable set-points and user calibration menus with password protection to maintain NIST traceability.',
    useCases: ['Metrology Labs', 'Reference Voltage Sources', 'Precision Sensor Calibration'],
    protocols: ['SCPI over USB/LAN/GPIB'],
    engineeringInsights: `A high precision variable power supply is defined by its ultra-low temperature coefficient and exceptional long-term stability. Our precision units utilize 6.5-digit measurement accuracy and temperature-stabilized voltage references to ensure that set-points remain accurate within 0.01% of the full scale over a 24-hour period. 

    The adjustable output features micro-step resolution—down to 10 microvolts for voltage and 1 microampere for current. This level of granularity is essential for metrology-grade sensor calibration and the characterization of low-power semiconductors where noise floor and drift are the primary limiting factors.`,
    applicationBrief: `Indispensable for metrology laboratories and high-end automotive sensor R&D, the high precision variable power supply is used to simulate exact reference voltages for ADC (Analog-to-Digital Converter) calibration and precision instrumentation amplifier testing.`,
  },
  {
    slug: 'programmable-variable-power-supply',
    name: 'Programmable Variable Power Supply',
    url: 'https://variabledcpowersupply.com/programmable-dc-power-supply/',
    description: 'Computer-controlled DC power sources with digital interfaces for remote testing.',
    techSummary: 'Advanced script-based operation. Supports list-mode sequences for pulse generation and battery discharge simulation.',
    safetyLogic: 'Watchdog timers for remote communication to safely power down if the control PC hangs.',
    useCases: ['Automated Production Lines (ATE)', 'Long-term Reliability Testing', 'Battery Cycle Life Testing'],
    protocols: ['Standard SCPI', 'LabVIEW Driver Support', 'Python SDK'],
    engineeringInsights: `A programmable variable power supply is defined by its control precision and communication reliability. Our programmable range features 24-bit DACs for set-point control, allowing for sub-millivolt adjustments over a 0-800V range. 

    The integration of SCPI (Standard Commands for Programmable Instruments) ensures that these variable units can be controlled by any industrial software stack, from LabVIEW to custom Python scripts. A critical safety feature is the integrated Watchdog timer, which automatically executes a safe-shutdown sequence if communication with the host computer is lost for more than a user-defined threshold.`,
    applicationBrief: `In automated test equipment (ATE) environments, the programmable variable source is used to execute 'list-oriented' sequences. This allows for the simulation of complex power-up/down ramps, battery discharge profiles, and simulated 'glitches' to test the robustness of automotive electronics and consumer IoT devices under real-world conditions.`,
    physicalSpecs: {
      cooling: 'Precision Air Management',
      interface: 'Multi-Interface Support',
      formFactor: 'Integrated ATE Chassis'
    },
    faqs: [
      {
        q: "How does SCPI control improve automated testing?",
        a: "Standard Commands for Programmable Instruments (SCPI) allow you to script complex power-up sequences and data logging from a PC. This programmable variable power supply integrates seamlessly with LabVIEW, Python, and MATLAB."
      },
      {
        q: "What is 'List Mode' in a programmable power source?",
        a: "List mode allows you to upload a custom sequence of voltage/current steps (up to 1000 points) that the variable power supply executes autonomously, perfect for simulating real-world power fluctuations or transients."
      },
      {
        q: "Does this unit support isolated remote communication?",
        a: "Yes. Our programmable interfaces (USB/LAN/GPIB) are optically isolated from the DC output rails to prevent ground loops and protect your control PC from high-voltage transients."
      }
    ],
  },
  {
    slug: 'triple-output-variable-power-supply',
    name: 'Triple Output Variable Power Supply',
    url: 'https://variabledcpowersupply.com/triple-output-bench-power-supplies/',
    description: 'Triple isolated output variable DC power supplies for mixed-signal benches requiring flexible multi-rail testing and stable regulation.',
    techSummary: 'Individual control for each channel. Supports series or parallel linking of channels for higher voltage or current output on demand.',
    safetyLogic: 'Channel-to-channel isolation >300V. Independent OVP/OCP for each output rail.',
    useCases: ['Digital/Analog Mixed Circuit Development', 'Educational Labs', 'Multi-Rail System Powering'],
    protocols: ['USB (Multi-channel control)', 'Local'],
    engineeringInsights: `The triple output variable power supply is the ultimate 'bench companion' for mixed-signal engineering. By providing three fully isolated DC channels, it eliminates the danger of ground loops when working on systems with separate analog, digital, and high-power rails. 

    Each channel features independent regulation loops, ensuring that a transient surge on the high-current channel does not impact the ultra-stable voltage on the low-power digital rail. The 'Series' and 'Parallel' tracking modes allow the first two channels to be coupled synchronously, doubling the available voltage to 60V or current to 10A at the touch of a button.`,
    applicationBrief: `Standard for university embedded systems labs and professional firmware development benches, the triple channel adjustable power supply is used to simultaneously power microcontrollers (3.3V), analog sensors (+/- 15V), and actuators such as servos or solenoids. Its compact footprint saves valuable bench space while providing the capabilities of three separate power units.`,
    physicalSpecs: {
      cooling: 'Three-Channel Managed Airflow',
      interface: 'Independent Binding Posts x3',
      formFactor: 'Medium Benchtop Chassis'
    },
    faqs: [
      {
        q: "How does channel isolation work in the Triple Output series?",
        a: "Each of the three outputs is electrically isolated from the others. This allows you to power unrelated circuit sections (like 3.3V digital and +/- 15V analog) without ground loop interference."
      },
      {
        q: "Can I combine channels for higher voltage?",
        a: "Yes. The Triple Output variable power supply supports 'Series Mode' to double the voltage (up to 60V) or 'Parallel Mode' to double the current on the first two channels."
      }
    ]
  },
  {
    slug: 'benchtop-variable-power-supply',
    name: 'Benchtop Variable Power Supply',
    url: 'https://variabledcpowersupply.com/bench-dc-power-supply/',
    description: 'Professional benchtop DC power supplies for laboratory environments and electronics repair.',
    techSummary: 'The benchtop series features a compact vertical or horizontal footprint optimized for cramped workspaces. Includes high-resolution encoders for precise voltage and current adjustment.',
    safetyLogic: 'Front-panel output enable/disable switch and intelligent thermal protection system.',
    useCases: ['Electronic Repair', 'School Labs', 'Engineering Development'],
    protocols: ['Local Control', 'USB (Selected)'],
    engineeringInsights: `The benchtop variable power supply is designed for the ergonomics of an engineering workstation. Featuring a compact vertical footprint and front-panel safety binding posts, it provides quick-access adjustable DC power for day-to-day circuit validation and hardware repair. 

    A key focus of our bench series is the intelligent thermal management system. The fan speed is controlled by a load-balanced algorithm that minimizes acoustic noise during low-power lab work while providing full forced-air cooling during high-power testing. This balance of quiet operation and raw power makes it the ideal 'daily driver' for researchers and repair technicians.`,
    applicationBrief: `Standard for electronics repair shops and university prototyping labs, the benchtop adjustable power supply is used for general-purpose board-level troubleshooting, where rapid adjustment of voltage and current limits is required to protect unidentified short-circuits.`,
    physicalSpecs: {
      cooling: 'Low-Noise Auto-Fan',
      interface: 'Multi-Way Binding Posts',
      formFactor: 'Compact Desktop'
    },
  },
  {
    slug: 'rack-mount-variable-power-supply',
    name: 'Rack Mount Variable Power Supply',
    url: 'https://variabledcpowersupply.com/etm-3050u-3u-programmable-dc-power-supply-30v-50a-with-4-digits-led-display-output-switch-control-low-noise-intelligent-cooling-fan/',
    description: 'High-power 19-inch rack mount variable DC sources for industrial test systems.',
    techSummary: 'Engineered for 24/7 continuous operation in high-density rack systems. Features standard 19" sizing with modular ventilation for efficient cabinet heat management.',
    safetyLogic: 'Remote sensing compensation and hardware-interlock for system safety integration.',
    useCases: ['Burn-in Chambers', 'Industrial ATE Racks', 'Production Line Power'],
    protocols: ['LAN (LXI)', 'RS485', 'Analog Programming'],
    engineeringInsights: `The rack mount variable power supply series is engineered for the 24/7 duty cycles of industrial production lines. By utilizing 19-inch standard chassis sizing (1U to 3U), these units integrate seamlessly into automated test equipment (ATE) cabinets. 

    Thermal management is handled via front-to-rear tunnel cooling, allowing multiple units to be stacked without a risk of thermal runaway. The inclusion of remote sensing and analog programming ports enables full integration with PLC-based control systems, providing the high-power variable DC source needed for industrial plating, burn-in chambers, and component aging systems.`,
    applicationBrief: `Deployed in high-density burn-in racks for server components and telecommunications power system testing, the rack-mount adjustable power supply provides a robust and scalable high-current solution for mission-critical industrial manufacturing.`,
    physicalSpecs: {
      cooling: 'Front-to-Rear Airflow',
      interface: 'Rear Terminal Blocks',
      formFactor: '19-inch Rack Chassis'
    },
  },
  {
    slug: 'high-voltage-variable-power-supply',
    name: 'High Voltage Variable Power Supply',
    url: 'https://variabledcpowersupply.com/high-voltage-dc-power-supply/',
    description: 'Extreme performance high-voltage DC power sources for advanced industrial research and laboratory testing.',
    techSummary: 'The high-voltage series delivers exceptional stability and safety for applications requiring up to several thousand volts with precision control.',
    safetyLogic: 'Multi-layer insulation and active discharge protocols are standard to ensure operator safety during high-voltage operations.',
    useCases: ['Dielectric Testing', 'High-Tension Lab Work', 'Industrial Insulation Analysis'],
    protocols: ['Analog Programming', 'RS485', 'LAN'],
    engineeringInsights: `Engineering at the high-voltage frontier (multiple kV) requires a total reimagining of isolation and safety. Our high-voltage variable power supply series utilizes oil-filled or vacuum-cast isolation transformers to achieve insulation ratings exceeding 10kV AC. 

    Each high-voltage adjustable unit features a sophisticated 'Arc-Detection' system. If the system detects the characteristic electromagnetic pulse of a high-voltage arc during insulation testing, it halts the output within 2 microseconds. This protects the precision measurement circuitry and prevents carbon tracking on the Device Under Test, which is essential for metrology-grade dielectric analysis.`,
    applicationBrief: `Used in particle physics research, high-tension insulation analysis, and extreme-voltage dielectric testing, our high-voltage variable DC systems are the trusted choice for national laboratories and high-energy research facilities requiring absolute precision in the kilovolt range.`,
    physicalSpecs: {
      cooling: 'Redundant Thermal Fans',
      interface: 'Heavy-Duty HV Terminals',
      formFactor: 'Rack-Mount/Tower'
    },
  },
];
